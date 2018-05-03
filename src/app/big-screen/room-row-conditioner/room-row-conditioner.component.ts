import {Component, OnInit, Input, Output, ElementRef} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgxEchartsService} from 'ngx-echarts';
@Component({
  selector: 'app-row-conditioner',
  templateUrl: './room-row-conditioner.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-row-conditioner.component.less'
  ]
})
export class RoomRowConditionerComponent implements OnInit {
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

  
  _currentPage = 1;
  totalcount = 20;

  tableIscroll;
  activeItem = {id: '', name: ''};

  


  constructor(public scale: ScaleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private ngxEchartsService: NgxEchartsService) {
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
