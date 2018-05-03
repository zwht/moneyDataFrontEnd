import {Component, OnInit, Input, Output, ElementRef} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-draught',
  templateUrl: './room-draught.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-draught.component.less'
  ]
})
export class RoomDraughtComponent implements OnInit {

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
  topBo1 = {
    width: 920,
    height: 72,
    left: 180,
    top: 170,
  };

  ulBok1 = {
    width: 287,
    height: 179,
    left: 138,
    top: 380,
  };
  ulBok2 = {
    width: 287,
    height: 179,
    left: 500,
    top: 380,
  };
  ulBok3 = {
    width: 287,
    height: 179,
    left: 860,
    top: 380,
  };

  ulBok1Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 90,
    percentage: 90,
    icon: 'icon-wendu',
    text: '电池充电百分比（%）'
  };
  ulBok2Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 60,
    percentage: 60,
    icon: 'icon-shidu',
    text: '电池电压（V）'
  };
  ulBok3Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 80,
    percentage: 80,
    icon: 'icon-shidu',
    text: '电池剩余时间（min）'
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
