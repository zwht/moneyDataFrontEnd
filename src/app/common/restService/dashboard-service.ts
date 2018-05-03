/**
 * Created by zhaowei on 2018/5/3.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../service/http-server';

@Injectable()
export class DashboardService {
  url = '/zw/:params1/:params2/:params3/:params4/:params5';
  urls = {
    list: {
      method: 'post',
      params:{
        params1:'costs'
      }
    }
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }
}
