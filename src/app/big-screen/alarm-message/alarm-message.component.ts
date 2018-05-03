import {Component, OnInit} from '@angular/core';
import {BigScreenService} from '../../common/restService/big-screen-service';

@Component({
  selector: 'app-alarm-message',
  templateUrl: './alarm-message.component.html',
  styleUrls: [
    '../commonCss/table-bo.less',
    './alarm-message.component.less'
  ]
})
export class AlarmMessageComponent implements OnInit {
  minTitle8 = {
    width: 223,
    height: 35,
    left: 31 + 30,
    top: 897 + 15,
  };
  box8 = {
    width: 1858,
    height: 163,
    left: 31,
    top: 897,
  };
  newAlarmData = [];

  constructor(private bigScreenService: BigScreenService) {
  }

  ngOnInit() {
    this.newAlarm();
  }

  // 最新报警信息
  newAlarm() {
    this.bigScreenService['newAlarm']({
      params: {}
    })
      .then(response => {
        this.newAlarmData = response.Events;
        setTimeout(() => {
          new window['IScroll']('#box8', {
            scrollbars: true,
            fadeScrollbars: false,
            mouseWheel: true
          });
        }, 1000);
      });
  }
}
