import {Injectable} from '@angular/core';
import {CodeService} from '../restService/code-service';

@Injectable()
export class SetCodeService {
  list = [];
  codeObj = {};
  codeList = {};
  constructor(private codeService: CodeService) {
    this.getLocalStorageData();

  }
  getLocalStorageData() {
    if (!this.list.length && localStorage.getItem('codeList')) {
      this.list = JSON.parse(localStorage.getItem('codeList'));
    }
    if (!this.list || !this.list.length) {
      this.init();
    } else {
      this.initData();
    }
  }

  init() {
    (this.codeService as any).list({})
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.list = response.data;
          this.initData();
          localStorage.setItem('codeList', JSON.stringify(this.list));
        } else {
          console.log(response);
        }
      });
  }

  initData() {
    this.codeObj = {};
    this.list.forEach(item => {
      this.codeObj[item.id] = item.value;
      if (!this.codeList[item.typeId]) {
        this.codeList[item.typeId] = [item];
      } else {
        this.codeList[item.typeId].push(item);
      }
    });
  }
}
