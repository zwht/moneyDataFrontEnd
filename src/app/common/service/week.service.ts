import {Injectable} from '@angular/core';

@Injectable()
export class WeekService {

  weekCh = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  constructor() {

  }

  // 更具时间段，获取时间天数数组
  getTimeDifference(diff) {
    if (!diff.length) {
      return;
    }
    diff[0] = Date.parse(diff[0].getFullYear() + '/' + (diff[0].getMonth() + 1) + '/' +
      diff[0].getDate());

    diff[1] = Date.parse(diff[1].getFullYear() + '/' + (diff[1].getMonth() + 1) + '/' +
      diff[1].getDate() + ' 23:59:59');
    const day: number = (diff[1].valueOf() - diff[0].valueOf()) / (100 * 60 * 60 * 24);
    const start = diff[0].valueOf();
    const end = diff[1].valueOf();
    const dayK = 1000 * 60 * 60 * 24 + 1;
    const arr = [];
    for (let i = 0; i <= day; i++) {
      if ((start + i * dayK) <= end) {
        const now = new Date(start + i * dayK);
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        arr.push(
          {
            time: year + '-' + (month < 10 ? ('0' + month) : month) +
            '-' + (date < 10 ? ('0' + date) : date),
            week: this.weekCh[now.getDay()],
            taskList: [],
            curDate: now.getTime(),
            workTime: 0,
            day: (month < 10 ? ('0' + month) : month) +
            '/' + (date < 10 ? ('0' + date) : date)
          });
      }
    }
    return arr;
  }

  // 获取当前周1开始-周日结束时间
  getNowWeek(now?) {
    let now1 = now;
    if (!now) {
      now1 = new Date();
    }
    const startTime = new Date(new Date(this.getTime(0, now1).toLocaleDateString()).getTime());
    const endTime = new Date(new Date(this.getTime(-6, now1).toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1);

    return [startTime, endTime];
  }

  /***参数都是以周一为基准的***/
  // 上周的开始时间getTime(7)
  // 上周的结束时间getTime(1)
  // 本周的开始时间getTime(0)
  // 本周的结束时间getTime(-6)
  getTime(n, now1?) {
    let now = now1;
    if (!now1) {
      now = new Date();
    }
    let year = now.getFullYear();
    // 因为月份是从0开始的,所以获取这个月的月份数要加1才行
    let month = now.getMonth() + 1;
    // let date = now.getDate();
    const day = now.getDay();
    // 判断是否为周日,如果不是的话,就让今天的day-1(例如星期二就是2-1)
    if (day !== 0) {
      n = n + (day - 1);
    } else {
      n = n + day;
    }
    if (day) {
      // 这个判断是为了解决跨年的问题
      if (month > 1) {
        month = month;
      } else {
        // 这个判断是为了解决跨年的问题,月份是从0开始的
        year = year - 1;
        month = 12;
      }
    }
    now.setDate(now.getDate() - n);

    /**year = now.getFullYear();
     month = now.getMonth() + 1;
     date = now.getDate();
     return year + '-' + (month < 10 ? ('0' + month) : month) +
     '-' + (date < 10 ? ('0' + date) : date);**/
    return now;
  }

  // 如果要获取昨天的日期，num就是-1， 前天的就是-2，依次类推。str表示年月日间的分割方式
  getDay(num, str) {
    const today = new Date();
    const nowTime = today.getTime();
    const ms = 24 * 3600 * 1000 * num;
    today.setTime(parseInt(nowTime + ms + ''));
    const oYear = today.getFullYear();
    let oMoth = (today.getMonth() + 1).toString();
    if (oMoth.length <= 1) {
      oMoth = '0' + oMoth;
    }
    let oDay = today.getDate().toString();
    if (oDay.length <= 1) {
      oDay = '0' + oDay;
    }
    return oYear + str + oMoth + str + oDay;
  }

}
