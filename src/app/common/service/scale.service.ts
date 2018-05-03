import {Injectable} from '@angular/core';
import {ScaleBox} from '../class/scale-box';
import {EventService} from './event.service';
import {Observable} from 'rxjs';

@Injectable()
export class ScaleService {
  uiWidth = 1920;
  uiHeight = 1080;
  bodyWidth = window.document.body.clientWidth;
  bodyHeight = window.document.body.clientHeight;
  widthScale = 1;
  heightScale = 1;
  left = 0;
  top = 0;
  sizeChangObservable: any;
  scaling = false; // true铺满窗口，false最小铺满
  minScale = 0.5;

  constructor(private eventServer: EventService) {
    this.init();
    const thant = this;
    this.sizeChangObservable = Observable
      .create(function (observer) {
        Observable.fromEvent(window, 'resize')
          .debounceTime(100) // 以免频繁处理
          .subscribe((event) => {
            // 这里处理页面变化时的操作
            thant.init();
            observer.next(thant);
          });
      });
  }

  init() {
    this.bodyWidth = window.document.body.clientWidth;
    this.bodyHeight = window.document.body.clientHeight;
    this.widthScale = parseFloat((this.bodyWidth / this.uiWidth).toFixed(3));
    this.heightScale = parseFloat((this.bodyHeight / this.uiHeight).toFixed(3));

    if (this.widthScale <= this.heightScale) {
      if (!this.scaling) {
        if (this.widthScale < this.minScale) {
          this.widthScale = this.minScale;
        }
        this.heightScale = this.widthScale;
        this.left = 0;
        this.top = (this.bodyHeight - this.heightScale * this.bodyHeight) / 2;
      }
    } else {

      if (!this.scaling) {
        if (this.heightScale < this.minScale) {
          this.widthScale = this.minScale;
        }
        this.widthScale = this.heightScale;
        this.top = 0;
        this.left = (this.bodyWidth - this.widthScale * this.bodyWidth) / 2;
      }
    }
    document.documentElement.style.fontSize = this.widthScale * 100 + 'px';
  }

  getBox(obj: ScaleBox) {

  }

}
