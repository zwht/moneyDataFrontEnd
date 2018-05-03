import {Component, OnInit} from '@angular/core';
import {OtherList} from '../../../other/other.routes';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {EventService} from '../../../common/service/event.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less'],
  providers: []
})
export class MenuComponent implements OnInit {
  menuLocation = false;
  childrenShowKey = true;
  menu = [];
  collectKey = false;
  userName = localStorage.getItem('loginName');
  // 有子菜单的需要引入
  routesMenu = [OtherList[0]];
  constructor(private router: Router,
              private nzModalService: NzModalService,
              private eventServer: EventService) {}

  ngOnInit() {
    const userType = localStorage.getItem('roles');
    this.router.config[1].children.forEach(item => {

      if (item.data.type) {
        let key = false;
        item.data.type.forEach(ob1 => {
          if (ob1 == userType) {
            key = true;
          }
        });
        if (!key) {
          return;
        }
      }
      if (item.data && (item.data as any).menu) {
        const itemMenu = {
          path: item.path, 
          name: (item.data as any).name,
          children: [], 
          data: item.data,
          classNmae:item.data.className
        };
        this.menu.push(itemMenu);
      }
    });
    this.setActiveMenu(this.router.url, '/admin/');
  }

  goCollect() {
    this.menu.forEach(item => {
      item.active = false;
    });
    this.collectKey = true;
    this.router.navigate(['/admin/collect/index']);
  }

  downChange(data) {
    switch (data.value) {
      case 'my': {
        this.router.navigate(['/admin/user/detail']);
        break;
      }
      case 'exit': {
        localStorage.removeItem('token');
        localStorage.removeItem('userName');
        this.router.navigate(['/']);
        break;
      }
    }
  }

  // 设置菜单选中
  setActiveMenu(url, br) {
    this.menu.forEach(item => {
      item.children.forEach(subItem => {
        if (br + subItem.path === url) {
          subItem.active = true;
        } else {
          subItem.active = false;
        }
      });
      if (url.indexOf(item.path) !== -1) {
        item.active = true;
        if (this.menuLocation) {
          item.show = true;
        }
      } else {
        item.active = false;
      }
    });
    if (url.indexOf('/admin/collect') !== -1) {
      this.collectKey = true;
    }
  }

  goMenu(item) {
    this.setActiveMenu(item.path, '');
    this.router.navigateByUrl('/admin/' + item.path);
  }


  bigMenu(item) {
    if (!item.children.length) {
      this.setActiveMenu(item.path, '');
      this.router.navigateByUrl('/admin/' + item.path );
    }
    item.show = !item.show;
  }

  bigMenuTop(item) {
    this.collectKey = false;
    if (!item.children.length) {
      this.setActiveMenu(item.path, '');
      this.router.navigateByUrl('/admin/' + item.path + (item.data.hideChild ? '/index' : ''));
    }
  }


}
