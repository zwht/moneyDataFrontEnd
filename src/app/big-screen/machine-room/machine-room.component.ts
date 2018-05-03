import {Component, OnInit} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-machine-room',
  templateUrl: './machine-room.component.html',
  styleUrls: ['./machine-room.component.less']
})
export class MachineRoomComponent implements OnInit {

  box6 = {
    width: 357,
    height: 827,
    left: 31 + 1486 + 15,
    top: 59,
  };
  minTitle11 = {
    width: 120,
    height: 34,
    left: 31 + 1486 + 15 + 30,
    top: 59 + 15,
  };
  box7 = {
    width: 355,
    height: 737,
    left: 31 + 1486 + 15,
    top: 59 + 70,
  };

  myScroll;
  mData = [
    {
      name: '中心机房',
      active: true,
      id: '2',
      list: [
        {
          id: '3',
          url: '/machineRoom/dcPower',
          name: '直流电源'
        },
        {
          id: '5',
          url: '/machineRoom/ups',
          name: 'UPS'
        },
        {
          name: 'EPS',
          url: '/machineRoom/eps'
        },
        {
          name: 'STS',
          url: '/machineRoom/sts'
        },
        {
          id: 8,
          url: '/machineRoom/switch',
          name: '开关状态'
        },
        {
          url: '/machineRoom/energy',
          name: '电量仪'
        },
        {
          url: '/machineRoom/electric',
          name: '精密配电柜'
        },
        {
          url: '/machineRoom/pdu',
          name: '智能PDU'
        },
        {
          url: '/machineRoom/cell',
          name: '蓄电池'
        },

        {
          url: '/machineRoom/rowConditioner',
          name: '行间空调'
        },
        {
          url: '/machineRoom/conditioner',
          name: '精密空调'
        },
        {
          url: '/machineRoom/temperature',
          name: '温湿度'
        },
        {
          url: '/machineRoom/warm',
          name: '恒温机'
        },
        {
          url: '/machineRoom/water',
          name: '定位漏水'
        },
        {
          url: '/machineRoom/fan',
          name: '新风机'
        },
        {
          url: '/machineRoom/switch',
          name: '空调机'
        }

      ]
    },
    {
      name: '看见的肌肤',
      active: false,
      id: '3',
      list: [
        {
          name: '看见速度束的',
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        }
      ]
    },
    {
      name: '看见的肌肤',
      active: false,
      id: '4',
      list: [
        {
          name: '看见速度束的',
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        },
        {
          name: '看见速度束的'
        }
      ]
    }
  ];
  active = this.mData[0];
  subActive;

  constructor(private scale: ScaleService,
              private router: Router) {
    this.scale.sizeChangObservable.subscribe(value => {
      this.scale = value;
    });
  }

  ngOnInit() {

    setTimeout(() => {
      this.myScroll = new window['IScroll']('#box7', {
        scrollbars: true,
        fadeScrollbars: false,
        mouseWheel: true
      });
    }, 1000);
  }

  goBack(item) {
    this.subActive = '';
    item.active = false;
  }

  goItem(item) {
    this.mData.forEach(obj => {
      for (let i = 0; i < obj.list.length; i++) {
        if (obj.list[i] === item) {
          this.active = obj;
        }
        obj.list[i]['active'] = false;
      }
    });
    item.active = true;
    this.subActive = item;
    this.router.navigate([item.url],
      {
        queryParams: {
          id: item ? item.id : '',
          name: item.name
        }
      });
  }

  showM(obj) {
    this.subActive = '';
    this.mData.forEach(obj1 => {
      obj1.active = false;
      for (let i = 0; i < obj1.list.length; i++) {
        obj1.list[i]['active'] = false;
      }
    });
    obj.active = true;
    this.active = obj;
    setTimeout(() => {
      this.myScroll.refresh();
    }, 500);
    this.router.navigate(['/machineRoom'],
      {
        queryParams: {
          id: obj.id,
          name: obj.name
        }
      });
  }

}
