import {Component, OnInit, Input, Output, ElementRef} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-electric',
  templateUrl: './room-electric.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-electric.component.less'
  ]
})
export class RoomElectricComponent implements OnInit {
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
  imgTil1 = {
    width: 120,
    height: 34,
    left: 400,
    top: 70,
  };
  imgTil2 = {
    width: 120,
    height: 34,
    left: 400,
    top: 330,
  };

  ulBok1 = {
    width: 239,
    height: 149,
    left: 400,
    top: 120,
  };
  ulBok2 = {
    width: 239,
    height: 149,
    left: 695,
    top: 120,
  };
  ulBok3 = {
    width: 239,
    height: 149,
    left: 980,
    top: 120,
  };
  ulBok4 = {
    width: 239,
    height: 149,
    left: 400,
    top: 380,
  };
  ulBok5 = {
    width: 239,
    height: 149,
    left: 695,
    top: 380,
  };
  ulBok6 = {
    width: 239,
    height: 149,
    left: 980,
    top: 380,
  };

  ulBok1Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 90,
    percentage: 90,
    icon: '',
    text: '主路_Ia（A）'
  };
  ulBok2Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 60,
    percentage: 60,
    icon: '',
    text: '主路_Ib（A）'
  };
  ulBok3Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 80,
    percentage: 80,
    icon: '',
    text: '主路_Ic（A）'
  };
  ulBok4Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 90,
    percentage: 90,
    icon: '',
    text: '主路_Ua（V）'
  };
  ulBok5Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 60,
    percentage: 60,
    icon: '',
    text: '主路_Ub（V）'
  };
  ulBok6Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 80,
    percentage: 80,
    icon: '',
    text: '主路_Uc（V）'
  };
  electric = {
    width: 485,
    height: 607,
    left: -70,
    top: 40,
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
