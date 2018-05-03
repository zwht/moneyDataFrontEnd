import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class EventService {
  public sizeChange: any;
  public routerChange: any;
  constructor() {
    // 定义发射事件
    this.sizeChange = new EventEmitter();
    this.routerChange = new EventEmitter();
  }

}
