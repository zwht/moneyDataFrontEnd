import {Component, OnInit, Input, Output, ElementRef} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-fan',
  templateUrl: './room-fan.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-fan.component.less'
  ]
})
export class RoomFanComponent implements OnInit {
  box5 = {
    width: 1486,
    height: 827,
    left: 31,
    top: 59,
  };
  active = true;
  back = {
    width: 96,
    height: 30,
    left: 31 + 20,
    top: 59 + 399,
  };
  cpTitle = {
    width: 1300,
    height: 45,
    left: 31 + 196,
    top: 59 + 65,
  };
  cpMain = {
    width: 1280,
    height: 705,
    left: 31 + 196,
    top: 59 + 65 + 45,
  };

  item1 = {
    width: 120,
    height: 120,
    left: 95,
    top: 170,
  };
  item2 = {
    width: 120,
    height: 120,
    left: 95,
    top: 385,
  };

  ulBok1 = {
    width: 239,
    height: 149,
    left: 980,
    top: 50,
  };
  ulBok2 = {
    width: 239,
    height: 149,
    left: 980,
    top: 240,
  };
  ulBok3 = {
    width: 239,
    height: 149,
    left: 980,
    top: 430,
  };
  til1 = {
    width: 205,
    height: 71,
    left: 370,
    top: 50,
  };
  til2 = {
    width: 205,
    height: 71,
    left: 675,
    top: 50,
  };

  ulBok1Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 90,
    percentage: 90,
    icon: '',
    text: '电池剩余时间（min）'
  };
  ulBok2Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 60,
    percentage: 60,
    icon: '',
    text: '电池充电百分比（%）'
  };
  ulBok3Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 80,
    percentage: 80,
    icon: '',
    text: '电池电压（V）'
  };

  _currentPage = 1;
  totalcount = 20;

  tableIscroll;
  activeItem = {id: '', name: ''};


  constructor(public scale: ScaleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.activeItem.id = params['id'];
      this.activeItem.name = params['name'];

    });
  }

  ngOnInit() {


  }

  backClick() {
    this.router.navigate(['/machineRoom'],
      {
        queryParams: this.activeItem
      });
  }

  pageChange(v) {
  }

  showTable(key) {
    this.active = key;
    if (!key) {
      setTimeout(() => {
        this.tableIscroll = new window['IScroll']('#tableIscroll', {
          scrollbars: true,
          fadeScrollbars: false,
          mouseWheel: true
        });
      }, 500);
    } else {

    }
  }
}
