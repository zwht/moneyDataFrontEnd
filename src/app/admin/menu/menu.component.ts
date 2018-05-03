import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {EventService} from '../../common/service/event.service';

@Component({
  selector: 'app-menu',
  templateUrl:'./menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: []
})
export class MenuComponent implements OnInit {
  menuLocation = false;
  childrenShowKey = true;
  menu = [
    {
      path: 'test1',
      data: {
        name: '动力链路',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'dlll'
    },
    {
      path: 'history-event',
      data: {
        name: '历史事件',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'lssj'
    },
    {
      path: 'operation-note',
      data: {
        name: '操作日记',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'czrj'
    },
    {
      path: 'alarm-setting',
      data: {
        name: '报警设置',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'jbsz'
    },
    {
      path: 'operation-instructions',
      data: {
        name: '运维知识库',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'ywzsk'
    },
    {
      path: 'test7',
      data: {
        name: '资产信息管理',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'zcxxgl'
    },
    {
      path: 'data-charts',
      data: {
        name: '报表管理',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'bbgl'
    },
    {
      path: 'test9',
      data: {
        name: '节能管理',
        type: [0, 1],
        hideChild: true,
        menu: true,
      },
      active:false,
      className: 'jngl'
    },
  ];
  constructor(private router: Router,
              private nzModalService: NzModalService,
              private eventServer: EventService) {}

  ngOnInit() {
    const userType = localStorage.getItem('roles');
    this.setActiveMenu(this.router.url, '/admin/');
  }
  // 设置菜单选中
  setActiveMenu(url, br) {
    this.menu.forEach(item => {
      if (url.indexOf(item.path) !== -1) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  goMenu(item) {
    this.setActiveMenu(item.path, '');
    this.router.navigateByUrl('/admin/' + item.path);
  }
}
