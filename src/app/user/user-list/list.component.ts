import {Component, OnInit} from '@angular/core';
import {UserService} from '../../common/restService/user-service';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd';
import {AddComponent} from '../../common/components/user-add/add.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less'],
  providers: []
})
export class ListComponent implements OnInit {
  list = [];
  total = 0;
  pageNum = 1;
  pageSize = 15;
  loading = false;
  windHeight = 800;
  depList = [];
  activeMenu = {};
  orgObj = {
    name: '清数科技',
    active: false
  };
  _allChecked;
  selectUserList = [];

  constructor(private userService: UserService,
              private router: Router,
              private nzModalService: NzModalService) {
  }

  ngOnInit() {
    this.getDepList();
    this.windHeight = document.documentElement.clientHeight - 100;
  }

  moveItem(item) {


    /*const modal = this.nzModalService.open({
      title: '移动用户',
      content: MoveUserComponent,
      width: 360,
      zIndex: 1001,
      class: 'modal-no-padding',
      maskClosable: false,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        userList: item ? [item] : this.selectUserList
      }
    });
    modal.subscribe(result => {
      if (result === true) {
        this.getList();
      }
    });*/
  }

  _checkAll(value) {
    if (value) {
      this.list.forEach(data => data.checked = true);
    } else {
      this.list.forEach(data => data.checked = false);
    }
    this._refreshStatus();
  }

  _refreshStatus() {
    const allChecked = this.list.every(value => value.checked === true);
    const allUnChecked = this.list.every(value => !value.checked);
    this._allChecked = allChecked;
    this.selectUserList = [];
    this.list.forEach(item => {
      if (item.checked) {
        this.selectUserList.push(item);
      }
    });
  }

  deleteDep(item) {
    /*this.departmentService['del']({params: {id: item.id}})
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.getDepList();
        } else {
          console.log(response);
        }
      });*/
  }

  changeMenu(item) {
    this.depList.forEach(obj => {
      obj.active = false;
    });
    item.active = true;
    this.activeMenu = item;
    this.getList();
  }

  add(item) {
    this.router.navigate(['/admin/user/add'], {queryParams: {id: item ? item.id : ''}});
  }

  addDep() {
    /*const modal = this.nzModalService.open({
      title: '添加部门',
      content: AddDepartmentComponent,
      width: 360,
      zIndex: 1001,
      class: 'modal-no-padding',
      maskClosable: false,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        depList: this.depList
      }
    });
    modal.subscribe(result => {
      if (result === true) {
        this.getDepList();
      }
    });*/
  }

  addUser() {
    const modal = this.nzModalService.open({
      title: '添加成员',
      content: AddComponent,
      width: 360,
      zIndex: 1001,
      class: 'modal-no-padding',
      maskClosable: false,
      onOk() {
      },
      onCancel() {
        console.log('Click cancel');
      },
      footer: false,
      componentParams: {
        activeDepId: this.activeMenu['id']
      }
    });
    modal.subscribe(result => {
      if (result === true) {
        this.getList();
      }
    });
  }

  getDepList() {
    /*this.departmentService['list']({
      params: {
        params2: 1,
        params3: 1000
      },
      data: {}
    })
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.depList = response.data.pageData;
          this.orgObj.active = true;
          this.activeMenu = this.orgObj;
          this.depList.unshift(this.orgObj);
          this.getList();
        } else {
          console.log(response);
        }
      });*/
  }

  getList() {
    this.loading = true;
    this.userService['list']({
      params: {
        params2: this.pageNum,
        params3: this.pageSize
      },
      data: {
        depId: this.activeMenu['id']
      }
    })
      .then(response => {
        this.loading = false;
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.total = response.data.totalCount;
          this.list = response.data.pageData;
          this._refreshStatus();
        } else {
          console.log(response);
        }
      });
  }

  dataChange(event) {

  }

  deleteUser(id) {
    (this.userService as any).del({params: {id}})
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.getList();
        } else {
          console.log(response);
        }
      });
  }

  delListUser() {
    this.selectUserList.forEach(item => {
      this.deleteUser(item.id);
    });
  }

}
