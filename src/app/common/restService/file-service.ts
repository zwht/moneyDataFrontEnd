/**
 * Created by zhaowei on 2017/10/16.
 */
import {Injectable} from '@angular/core';
import {HttpServer} from '../service/http-server';

@Injectable()
export class FileService {
  url = '/v1/file/:params1/:params2/:params3/:params4/:params5';
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
    getById: {
      method: 'get',
      params: {
        params1: 'download'
      },
    },
    update: {
      method: 'post',
      params: {
        params1: 'update'
      }
    },
    updateState: {
      method: 'post',
      params: {
        params1: 'updateState'
      }
    },
    del: {
      method: 'get',
      params: {
        params1: 'delete'
      }
    },
    findAllParent: {
      method: 'get',
      params: {
        params1: 'findAllParent'
      }
    },
    moveFile: {
      method: 'post',
      params: {
        params1: 'moveFile'
      }
    },
  };

  constructor(httpServer: HttpServer) {
    httpServer.S(this);
  }
}
