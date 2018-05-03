import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../common/shared.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {MachineRoomComponent} from './machine-room/machine-room.component';
import {GoMenuComponent} from './go-menu/go-menu.component';
import {TitleLeftComponent} from './title-left/title-left.component';
import {TitleRightComponent} from './title-right/title-right.component';
import {AlarmMessageComponent} from './alarm-message/alarm-message.component';
import {RoomUpsComponent} from './room-ups/room-ups.component';
import {RoomBoxComponent} from './room-box/room-box.component';
import {RoomDcPowerComponent} from './room-dc-power/room-dc-power.component';
import {RoomSwitchComponent} from './room-switch/room-switch.component';
import {RoomTemperatureComponent} from './room-temperature/room-temperature.component';
import {InstrumentPanelComponent} from './instrument-panel/instrument-panel.component';
import {RoomDraughtComponent} from './room-draught/room-draught.component';
import {RoomElectricComponent} from './room-electric/room-electric.component';
import {RoomWaterComponent} from './room-water/room-water.component';
import { RoomConditionerComponent } from './room-conditioner/room-conditioner.component';
import { RoomFanComponent } from './room-fan/room-fan.component';
import { RoomWarmComponent } from './room-warm/room-warm.component';
import { RoomCellComponent } from './room-cell/room-cell.component';
import { RoomCell2Component } from './room-cell2/room-cell2.component';
import { RoomPduComponent } from './room-pdu/room-pdu.component';
import { RoomRowConditionerComponent } from './room-row-conditioner/room-row-conditioner.component';
import { RoomEnergyComponent } from './room-energy/room-energy.component';
import { RoomEpsComponent } from './room-eps/room-eps.component';
import { RoomStsComponent } from './room-sts/room-sts.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    data: {
      name: '首页'
    }
  },
  {
    path: 'machineRoom',
    component: MachineRoomComponent,
    data: {
      name: '机房'
    },
    children: [
      {
        path: '',
        component: RoomBoxComponent,
        data: {
          name: '机房'
        }
      },
      {
        path: 'ups',
        component: RoomUpsComponent,
        data: {
          name: 'Ups'
        }
      },
      {
        path: 'dcPower',
        component: RoomDcPowerComponent,
        data: {
          name: '直流电源'
        }
      },
      {
        path: 'switch',
        component: RoomSwitchComponent,
        data: {
          name: '开关状态'
        }
      },
      {
        path: 'draught',
        component: RoomDraughtComponent,
        data: {
          name: '新风机'
        }
      },
      {
        path: 'temperature',
        component: RoomTemperatureComponent,
        data: {
          name: '温湿度'
        }
      },
      {
        path: 'electric',
        component: RoomElectricComponent,
        data: {
          name: '精密配电箱'
        }
      },
      {
        path: 'water',
        component: RoomWaterComponent,
        data: {
          name: '精密配电箱'
        }
      },
      {
        path: 'conditioner',
        component: RoomConditionerComponent,
        data: {
          name: '精密空调'
        }
      },
      {
        path: 'fan',
        component: RoomFanComponent,
        data: {
          name: '新风机'
        }
      },
      {
        path: 'warm',
        component: RoomWarmComponent,
        data: {
          name: '恒温机'
        }
      },
      {
        path: 'cell',
        component: RoomCell2Component,
        data: {
          name: '蓄电池'
        }
      },
      {
        path: 'pdu',
        component: RoomPduComponent,
        data: {
          name: '智能Pdu'
        }
      },
      {
        path: 'rowConditioner',
        component: RoomRowConditionerComponent,
        data: {
          name: '行间空调'
        }
      },
      {
        path: 'energy',
        component: RoomEnergyComponent,
        data: {
          name: '电量仪'
        }
      },
      {
        path: 'eps',
        component: RoomEpsComponent,
        data: {
          name: 'EPS'
        }
      },
      {
        path: 'sts',
        component: RoomStsComponent,
        data: {
          name: 'STS'
        }
      },
      
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    NgZorroAntdModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IndexComponent, MachineRoomComponent, GoMenuComponent,
    TitleLeftComponent, TitleRightComponent, AlarmMessageComponent,
    RoomUpsComponent,
    RoomBoxComponent,
    RoomDcPowerComponent,
    RoomTemperatureComponent,
    InstrumentPanelComponent,
    RoomDraughtComponent,
    RoomElectricComponent,
    RoomConditionerComponent,
    RoomWarmComponent,
    RoomCellComponent,
    RoomCell2Component,
    RoomPduComponent,
    RoomRowConditionerComponent,
    RoomEpsComponent,
    RoomStsComponent,
    RoomEnergyComponent,
    RoomFanComponent,
    RoomWaterComponent,
    RoomSwitchComponent,
  ]
})
export class BigScreenModule {
}
