import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: IndexComponent,
    data: {
      name: '首页'
    }
  }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    IndexComponent
  ]
})
export class DashboardModule { }
