import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {ListComponent} from './user-list/list.component';
import {DetailComponent} from './detail/detail.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      name: '组织管理'
    },
    children: [
      {
        path: 'detail',
        component: DetailComponent,
        data: {
          name: '个人中心',
          type: [0, 1]
        }
      },
      {
        path: 'index',
        component: ListComponent,
        data: {
          name: '用户列表',
          type: [0, 1]
        }
      }]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UserRoutes {
}

export const UserComponents: [any] = [
  DetailComponent,
  ListComponent
];
export const UserList = routes;
