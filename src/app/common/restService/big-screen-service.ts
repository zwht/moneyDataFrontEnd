/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../service/http-server';

@Injectable()
export class BigScreenService {
  url = '/v1';
  urls = {
    omnipotent: {
      method: 'get'
    },
    roomSum: {
      method: 'get',
      params: {
        Uid: '5.3.1.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    deviceSum: {
      method: 'get',
      params: {
        Uid: '5.3.2.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    roomTemperature: {
      method: 'get',
      params: {
        Uid: '5.1.1.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    alarmSum: {
      method: 'get',
      params: {
        Uid: '5.3.5.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    alarmDispose: {
      method: 'get',
      params: {
        Uid: '5.3.11.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    alarmUntreated: {
      method: 'get',
      params: {
        Uid: '5.3.14.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    roomWeekMonitoring: {
      method: 'get',
      params: {
        Type: 'ErrCnt'
      }
    },
    energyConsumption: {
      method: 'get',
      params: {
        Type: 'Datas',
        Uid: '5.1.3.',
        DtTp: 2
      }
    },
    equipmentFailure: {
      method: 'get',
      params: {
        Type: 'ErrCnt'
      }
    },
    PUE: {
      method: 'get',
      params: {
        Type: 'Datas',
        Uid: '5.1.2.',
        DtTp: 2
      }
    },
    power: {
      method: 'get',
      params: {
        Type: 'Get',
        Prop: 'Value'
      }
    },
    newAlarm: {
      method: 'get',
      params: {
        Type: 'Event'
      }
    }
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }
}
