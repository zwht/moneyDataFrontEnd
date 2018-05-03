import {Component, Input, OnInit, ViewChild, ElementRef, Output, EventEmitter} from '@angular/core';

import {FileService} from '../../restService/file-service';
import {NzModalService} from 'ng-zorro-antd';
import {CropperImgModalComponent} from '../cropper-img-modal/cropper-img-modal.component';
import {HttpClient, HttpRequest, HttpResponse} from '@angular/common/http';
import {filter} from 'rxjs/operators/filter';

@Component({
  selector: 'app-cropper-img',
  templateUrl: './cropper-img.component.html',
  styleUrls: ['./cropper-img.component.less'],
  providers: []
})
export class CropperImgComponent implements OnInit {

  loading = false;
  dialog = false;
  contentDialogStyle = {};
  fileName = '';

  @Input()
  boxStyle;
  @Input()
  cpImg;

  @ViewChild('image')
  image: ElementRef;
  @ViewChild('inputImage')
  inputImage: ElementRef;
  @ViewChild('cImg')
  cImg: ElementRef;

  @Output()
  saveEnd: EventEmitter<Object> = new EventEmitter();


  constructor(private fileService: FileService,
              private http: HttpClient,
              private nzModalService: NzModalService) {

  }

  ngOnInit() {
    if (this.boxStyle) {
      this.boxStyle.width = this.boxStyle.width ? this.boxStyle.width : 200;
      this.boxStyle.height = this.boxStyle.height ? this.boxStyle.height : 200;
    } else {
      this.boxStyle = {width: 200, height: 200};
    }
    this.contentDialogStyle = {width: this.boxStyle.width + 'px', height: this.boxStyle.height + 'px'};

    this.cropperInit();
  }

  cropperInit() {

    // Import image
    const URL = window.URL;

    if (URL) {
      const that = this;
      this.inputImage.nativeElement.onchange = function () {
        const files = that.inputImage.nativeElement.files;
        let file;
        if (files && files.length) {
          that.dialog = true;
          file = files[0];
          that.fileName = file.name;
          if (/^image\/\w+/.test(file.type)) {
            that.showModalForComponent(URL.createObjectURL(file));
            // (that.cropper  as any).reset().replace(blobURL);
          } else {
            window.alert('Please choose an image file.');
          }
        }
        // $(inputImage).find('img').hide();
      };
    } else {
      // inputImage.disabled = true;
    }
  }

  showDialog() {
    this.inputImage.nativeElement.setAttribute('type', 'text');
    this.inputImage.nativeElement.setAttribute('type', 'file');
    this.inputImage.nativeElement.click();
  }

  putb64(fileImg, token) {

    const pic = fileImg.split(',')[1];
    const url = 'http://upload-z2.qiniu.com/putb64/-1';
    const xhr = new XMLHttpRequest();
    const that = this;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        const obj = JSON.parse(xhr.response);
        if (obj.hash) {
          that.cpImg = obj.url = 'http://ozq3tirki.bkt.clouddn.com/' + obj.hash;
        }
        that.inputImage.nativeElement.files = null;
        that.saveEnd.emit(obj);
        that.dialog = false;
        that.loading = false;
        // http://ozq3tirki.bkt.clouddn.com/FhwDUd1ybmmc5TW0fQAgxzqGlS2R
      }
    };
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/octet-stream');
    xhr.setRequestHeader('Authorization', 'UpToken ' + token);
    xhr.send(pic);
  }

  save(cropper) {
    this.loading = true;
    const that = this;
    const result = cropper['getCroppedCanvas']({width: this.boxStyle.width, height: this.boxStyle.height});
    result.toBlob((blob) => {
      const formData = new FormData();
      formData.append(that.fileName, blob, that.fileName);
      const req = new HttpRequest('POST',
        '/v1/file/uploadUserHeader',
        formData, {});
      this.http.request(req).pipe(filter(e => e instanceof HttpResponse))
        .subscribe((event: any) => {
          const obj = event.body.data;
          obj.url = that.cpImg = obj.fileUrl;
          that.inputImage.nativeElement.files = null;
          that.saveEnd.emit(obj);
          that.dialog = false;
          that.loading = false;
        }, (err) => {
        });
    });
  }

  showModalForComponent(blobURL) {
    const subscription = this.nzModalService.open({
      title: '裁剪图片',
      content: CropperImgModalComponent,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        blobURL: blobURL,
        boxStyle: this.boxStyle
      }
    });
    subscription.subscribe(result => {
      if (result != 'onShown' && result.getCroppedCanvas) {
        this.save(result);
      }
    });
  }


}
