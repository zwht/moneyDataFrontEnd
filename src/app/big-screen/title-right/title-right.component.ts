import {Component, OnInit} from '@angular/core';
import {WeekService} from '../../common/service/week.service';

@Component({
  selector: 'app-title-right',
  templateUrl: './title-right.component.html',
  styleUrls: ['./title-right.component.less']
})
export class TitleRightComponent implements OnInit {

  titleRight = {
    width: 510,
    height: 50,
    left: 534 + 690,
    top: 20,
  };
  time = new Date();
  weekd = this.week.weekCh[this.time.getDay()];
  setInt;

  constructor(private week: WeekService) {
  }

  ngOnInit() {
    this.setInt = setInterval(() => {
      this.time = new Date();
      this.weekd = this.week.weekCh[this.time.getDay()];
    }, 1000);

  }

  ngOnDestroy() {
    if (this.setInt) {
      clearInterval(this.setInt);
    }
  }

}
