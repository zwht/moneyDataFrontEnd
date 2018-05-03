import { Component, OnInit,ViewChild} from '@angular/core';
import { NzInputDirectiveComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-alarm-setting-cpt',
  templateUrl: './alarm-setting-cpt.component.html',
  styleUrls: ['./alarm-setting-cpt.component.less']
})
export class AlarmSettingCptComponent implements OnInit {
  tableSourceData=[1,3];
  target = "";
  radioValue1 = 'A';
  radioValue2 = 'A';
  radioValue3 = 'A';
  radioValue4 = 'A';
  phones1 = [];
  phones2 = [];
  phones3 = [];
  phones4 = [];
  isEditing1 = false;
  isEditing2 = false;
  isEditing3 = false;
  isEditing4 = false;
  inputPhone:""
  inputVisible = false;
  constructor() { }
  @ViewChild('input') input: NzInputDirectiveComponent;
  ngOnInit() {
  }
  phoneDelete(v){
    this.phones1 = this.phones1.filter(tag => tag !== v);
  }
  addPhone(){
    this.inputVisible = true;
    setTimeout(() => {
        this.input.nativeElement.focus();
    }, 10);
  }
  handleInputConfirm(): void {
    if (this.inputPhone) {
        this.phones1.push(this.inputPhone);
    }
    this.inputPhone = '';
    this.inputVisible = false;
  }
}
