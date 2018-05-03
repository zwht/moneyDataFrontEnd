import {Component, OnInit, Input} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-room-box',
  templateUrl: './room-box.component.html',
  styleUrls: [
    '../commonCss/box5.less',
    './room-box.component.less'
  ]
})
export class RoomBoxComponent implements OnInit {
  box5 = {
    width: 1486,
    height: 827,
    left: 31,
    top: 59,
  };
  data = {
    width: 919,
    height: 621,
    list: [
      {
        type: 1,
        subType: 1,
        name: '电池组',
        url: '',
        x: 322,
        y: 211
      },
      {
        type: 1,
        subType: 2,
        name: '开关',
        url: '',
        x: 34,
        y: 56
      },
      {
        type: 2,
        name: '温度湿度',
        value: [25.67],
        url: '',
        x: 808,
        y: 247
      }
    ]
  };
  imgBoxStyle = {};
  imgScale = 1;
  activeItem = {id: '', name: ''};

  constructor(public scale: ScaleService,
              private activatedRoute: ActivatedRoute) {

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.activeItem.id = params['id'];
      this.activeItem.name = params['name'];

    });
  }

  ngOnInit() {
    this.setData();
  }

  setData() {
    if (this.data.width / this.box5.width > this.data.height / this.box5.height) {
      this.imgBoxStyle = {width: '100%'};
      this.imgScale = (this.scale.widthScale * this.box5.width) / this.data.width;
    } else {
      this.imgBoxStyle = {height: '100%'};
      this.imgScale = (this.scale.heightScale * (this.box5.height - 130)) / this.data.height;
    }
    this.data.list.forEach(item => {
      const style = {
        left: (item.x * this.imgScale - this.imgScale * 24) + 'px',
        top: (item.y * this.imgScale - this.imgScale * 52) + 'px',
        height: this.imgScale * 52 + 'px',
        'line-height': this.imgScale * 42 + 'px',
        fontSize: this.imgScale * 0.18 + 'rem'
      };
      item['style'] = style;
    });
  }
}
