import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginVo} from '../../../common/class/loginVo';
import {Md5} from 'ts-md5/dist/md5';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../common/restService/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: []
})

export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  // console.log("1");
  loading = false;
  login = new LoginVo();
  roles = '';
  logoImg = localStorage.getItem('logoUrl');

  constructor(private router: Router,
              private message: NzMessageService,
              private userService: UserService,
              private fb: FormBuilder,
              private _message: NzMessageService) {
  }
  rightShow = false;
  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  msIn(){
    this.rightShow = true;
  }
  msOut(){
    this.rightShow = false;
  }
  _login() {
    localStorage.setItem('roles', '0');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid) {
      this.loading = true;
      this.userService['login']({
        data: {
          password: Md5.hashStr(this.validateForm.value.password).toString(),
          userAccount: this.validateForm.value.userName
        }
      })
        .then(response => {
          const rep = (response as any);
          this.roles = rep.data.roles;
          if (rep.errorCode === 0) {
            localStorage.setItem('loginName', rep.data.name);
            localStorage.setItem('token', rep.data.authorization);
            localStorage.setItem('userId', rep.data.userId);
            this.go();
          } else {
            this._message.create('error', rep.msg, {nzDuration: 4000});
            this.loading = false;
          }

        })
        .catch(err => {
          this._message.create('error', err.message, {nzDuration: 4000});
          this.loading = false;
        });
    }
  }

  go() {
    /* switch (this.roles) {
       case '0':
         this.router.navigateByUrl('/admin/user/company');
         break;
       case '1':
         this.router.navigateByUrl('/admin/user/company');
         break;
       case '2':
         this.router.navigateByUrl('/admin/user/company');
         break;
       case '3':
         this.router.navigateByUrl('/admin/user/company');

         break;
       case '4':
         //this.router.navigateByUrl('/admin/user/company');
         break;
     }*/
    this.router.navigateByUrl('/admin/project/index');
  }
}
