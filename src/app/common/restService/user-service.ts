/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../service/http-server';
@Injectable()
export class UserService {
  url = '/v1/user/:params1/:params2/:params3/:params4/:params5';
  urls = {
    add: {
      method: 'post',
      params: {
        params1: 'add'
      }
    },
    list: {
      method: 'post',
      params: {
        params1: 'queryPage'
      }
    },
    listOften: {
      method: 'post',
      params: {
        params1: 'queryOften'
      }
    },
    getById: {
      method: 'get',
      params: {
        params1: 'findById'
      }
    },
    update: {
      method: 'post',
      params: {
        params1: 'update'
      }
    },
    del: {
      method: 'get',
      params: {
        params1: 'deleteById'
      }
    },
    login: {
      method: 'post',
      params: {
        params1: 'login'
      }
    },
    moveUser: {
      method: 'post',
      params: {
        params1: 'moveUser'
      }
    },
    resetPwd: {
      method: 'post',
      params: {
        params1: 'resetPwd'
      }
    }
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }

}
