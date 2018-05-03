import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormsModule } from '@angular/forms';
import { SharedModule } from '../common/shared.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule,Routes} from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { HistoryEventCptComponent } from './history-event-cpt/history-event-cpt.component';
import { OperationNoteCptComponent } from './operation-note-cpt/operation-note-cpt.component';
import { OperationInstructionsCptComponent } from './operation-instructions-cpt/operation-instructions-cpt.component';
import { TestComComponent } from './test-com/test-com.component';
import { AlarmSettingCptComponent } from './alarm-setting-cpt/alarm-setting-cpt.component';
import { DateFormat } from '../common/service/date-format';
import {DataChartsCptComponent} from './data-charts-cpt/data-charts-cpt.component';

export const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    data: {
      name: '后台',
    },
    children: [
      {
        path: 'test1',
        component: TestComComponent,
        data: {
          name: '动力链路',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'dlll'
        }
      },
      {
        path: 'history-event',
        component: HistoryEventCptComponent,
        data: {
          name: '历史事件',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'lssj'
        }
      },
      {
        path: 'operation-note',
        component: OperationNoteCptComponent,
        data: {
          name: '操作日记',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'czrj'
        }
      },
      {
        path: 'alarm-setting',
        component: AlarmSettingCptComponent,
        data: {
          name: '报警设置',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'jbsz'
        }
      },
      {
        path: 'operation-instructions',
        component: OperationInstructionsCptComponent,
        data: {
          name: '运维知识库',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'ywzsk'
        }
      },
      {
        path: 'test7',
        component: TestComComponent,
        data: {
          name: '资产信息管理',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'zcxxgl'
        }
      },
      {
        path: 'data-charts',
        component: DataChartsCptComponent,
        data: {
          name: '报表管理',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'bbgl'
        }
      },
      {
        path: 'test9',
        component: TestComComponent,
        data: {
          name: '节能管理',
          type: [0, 1],
          hideChild: true,
          menu: true,
          className: 'jngl'
        }
      },
    ]
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
    MenuComponent,
    HistoryEventCptComponent,
    OperationNoteCptComponent,
    OperationInstructionsCptComponent,
    TestComComponent,
    AlarmSettingCptComponent,
    DataChartsCptComponent
  ],
  providers:[
    DateFormat
  ]
})
export class AdminModule { }
export const menuRouter = routes;
