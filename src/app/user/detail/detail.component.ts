import {Component, OnInit} from '@angular/core';
import {UserService} from '../../common/restService/user-service';
import {Md5} from 'ts-md5/dist/md5';
import {NzMessageService} from 'ng-zorro-antd';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less'],
  providers: []
})
export class DetailComponent implements OnInit {
  title = '';
  data = {
    email: null,
    mobile: null,
    departmentName: null,
    gender: null,
    loginName: '',
    name: '',
    id: '',
    photoUrl: null
  };
  user = {
    newPassword: '',
    rPassword: '',
    password: ''
  };
  isVisible = false;

  constructor(private userService: UserService,
              private message: NzMessageService) {
  }

  ngOnInit() {
    this.getUser();
  }

  update() {
    this.userService['update']({data: this.data})
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.message.success('修改成功');
          this.isVisible = false;
        } else {
          this.message.error(rep.message);
        }
      });
  }

  imageChange(data) {
    const saveData = JSON.parse(JSON.stringify(this.data));
    saveData.photoUrl = data.url;
    this.userService['update']({data: saveData})
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.message.success('修改成功');
          this.isVisible = false;
        } else {
          this.message.error(rep.message);
        }
      });
  }

  getUser() {
    this.userService['getById']({params: {id: localStorage.getItem('userId')}})
      .then(response => {
        this.data = response.data;
      });
  }

  save() {
    if (!this.user.password || !this.user.newPassword) {
      this.message.error('请输入密码');
      return;
    }
    if (this.user.newPassword !== this.user.rPassword) {
      this.message.error('两次密码不匹配');
      return;
    }
    this.userService['resetPwd']({
      data: {
        oldPassword: Md5.hashStr(this.user.password),
        newPassword: Md5.hashStr(this.user.newPassword)
      }
    })
      .then(response => {
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.message.success('修改成功');
          this.isVisible = false;
        } else {
          this.message.error(rep.data);
        }
      });
  }

}
