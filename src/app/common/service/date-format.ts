/**
 * Created by zhaowei on 2017/10/23.
 */
import {Injectable} from '@angular/core';

@Injectable()
export class DateFormat {

  condateuctor() {
  }
  trans(date, fmt) {
    function padLeftZero(str) {
      return ('00' + str).substr(str.length);
    }
    if(date==undefined) return "";
    if(date=="") return "";
    if(!fmt) fmt="yyyy-MM-dd hh:mm:ss";
    if(!date.getFullYear) date=new Date(date);
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds()
    };
    for (let k in o) {
      if (new RegExp(`(${k})`).test(fmt)) {
        let str = o[k] + '';
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
      }
    }
    return fmt;
  }
}
