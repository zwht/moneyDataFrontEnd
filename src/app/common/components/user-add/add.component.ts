import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../../restService/user-service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Md5} from 'ts-md5/dist/md5';
import {NzMessageService, NzModalSubject} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less'],
  providers: []
})
export class AddComponent implements OnInit {
  validateForm: FormGroup;
  @Input()
  activeDepId;
  @Input()
  activeItem;

  constructor(private userService: UserService,
              private router: Router,
              private message: NzMessageService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private subject: NzModalSubject) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
    if (this.activeItem) {
      this.validateForm.setValue({name: this.activeItem.name, password: ''});
    }
  }
  save() {
    for (let i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
    }
    if (this.validateForm.valid) {
      (this.userService as any).add({
        data: {
          name: this.validateForm.value.name,
          password: Md5.hashStr(this.validateForm.value.password),
          departmentId: this.activeDepId ? this.activeDepId : null
        }
      })
        .then(response => {
          const rep = (response as any);
          if (rep.errorCode === 0) {
            this.message.success(rep.data);
            this.rest();
            this.subject.next(true);
          } else {
            this.message.error(rep.message);
          }
        });
    }
  }

  rest() {
    this.subject.destroy('onCancel');
  }
}
