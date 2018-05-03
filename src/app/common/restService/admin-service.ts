/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../service/http-server';

@Injectable()
export class AdminService {
  url = '/v1';
  urls = {
    omnipotent: {
      method: 'get'
    },
    historyEvent:{
      method: 'get',
      params:{
        Type:'HisEv'
      }
    },
    LogSys:{
      method: 'get',
      params:{
        Type:'LogSys'
      }
    },
    LogOpr:{
      method: 'get',
      params:{
        Type:'LogOpr'
      }
    },
    roomSum: {
      method: 'get',
      params: {
        Uid: '5.3.1.',
        Type: 'Get',
        Prop: 'Value'
      }
    },
    chartData: {
      method: 'get',
      params: {
        Type: 'Datas'
      }
    }
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }
}
