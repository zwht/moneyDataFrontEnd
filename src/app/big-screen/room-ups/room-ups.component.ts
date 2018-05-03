import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-room-ups',
  templateUrl: './room-ups.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-ups.component.less'
  ]
})
export class RoomUpsComponent implements OnInit {
  back = {
    width: 96,
    height: 30,
    left: 31 + 20,
    top: 59 + 399,
  };
  box5 = {
    width: 1486,
    height: 827,
    left: 31,
    top: 59,
  };
  active = true;
  cpTitle = {
    width: 1300,
    height: 45,
    left: 31 + 196,
    top: 59 + 65,
  };
  cpMain = {
    width: 1280,
    height: 705,
    left: 31 + 196,
    top: 59 + 65 + 45,
  };
  cpLeft = {
    width: 390,
    height: 360,
    left: 31 + 196,
    top: 59 + 65 + 95,
  };
  cpRight = {
    width: 370,
    height: 420,
    left: 31 + 196 + 900,
    top: 59 + 65 + 40,
  };

  ulBok1 = {
    width: 287,
    height: 179,
    left: 133,
    top: 474,
  };
  ulBok2 = {
    width: 287,
    height: 179,
    left: 499,
    top: 474,
  };
  ulBok3 = {
    width: 287,
    height: 179,
    left: 864,
    top: 474,
  };

  ulBok1Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 90,
    percentage: 90,
    icon: 'icon-wendu',
    text: '电池充电百分比（%）'
  };
  ulBok2Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 60,
    percentage: 60,
    icon: 'icon-shidu',
    text: '电池电压（V）'
  };
  ulBok3Obj = {
    url: './assets/images/index/temperature_10.png',
    value: 80,
    percentage: 80,
    icon: 'icon-shidu',
    text: '电池剩余时间（min）'
  };


  chartOption1;
  chartOption2;
  _currentPage = 1;
  totalcount = 20;

  tableIscroll;
  activeItem = {id: '', name: ''};

  constructor(public scale: ScaleService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.activeItem.id = params['id'];
      this.activeItem.name = params['name'];

    });
  }

  ngOnInit() {

    this.getChart1();
    this.getChart2();
  }

  getChart1() {
    const xData = ['hsd', '23', 'sffd', '54', '656'];
    const sData = [27, 3, 5, 45, 6, 8];
    this.chartOption1 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params, ticket, callback) {
          return params[0].name + '<br>' + params[0].data;
        }
      },
      grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: xData,
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {show: false}
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {show: false}
        }
      ],
      series: [
        {
          name: '设备数',
          type: 'bar',
          data: sData,
          'itemStyle': {
            'normal': {
              'color': {
                'type': 'linear',
                'x': 0,
                'y': 0,
                'x2': 0,
                'y2': 1,
                'colorStops': [
                  {
                    'offset': 0,
                    'color': 'rgba(255,37,117,0.7)'
                  },
                  {
                    'offset': 0.5,
                    'color': 'rgba(0,133,245,0.7)'
                  },
                  {
                    'offset': 1,
                    'color': 'rgba(0,133,245,0.3)'
                  }
                ],
                'globalCoord': false
              }
            }
          }
          /*itemStyle: {
            normal: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#55edfd'},
                  {offset: 1, color: '#082eb1'}
                ]
              )
            },
            emphasis: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#55edfd'},
                  {offset: 1, color: '#082eb1'}
                ]
              )
            }
          }*/
        },
        {
          type: 'bar',
          barGap: '-100%',
          itemStyle: {
            color: '#000',
            opacity: 0.2
          },
          barWidth: '40%',
          data: [100, 100, 100, 100, 100],
          z: 5
        }
      ]
    };
  }

  getChart2() {
    const xData = ['hsd', '23', 'sffd', '54', '656'];
    const sData = [27, 3, 5, 45, 6, 8];
    this.chartOption2 = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function (params, ticket, callback) {
          return params[0].name + '<br>' + params[0].data;
        }
      },
      grid: {
        top: '10%',
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: xData,
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {show: false}
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#FFF'
            }
          },
          axisTick: {
            show: false
          },
          splitLine: {show: false}
        }
      ],
      series: [
        {
          name: '设备数',
          type: 'bar',
          data: sData,
          'itemStyle': {
            'normal': {
              'color': {
                'type': 'linear',
                'x': 0,
                'y': 0,
                'x2': 0,
                'y2': 1,
                'colorStops': [
                  {
                    'offset': 0,
                    'color': 'rgba(255,37,117,0.7)'
                  },
                  {
                    'offset': 0.5,
                    'color': 'rgba(0,133,245,0.7)'
                  },
                  {
                    'offset': 1,
                    'color': 'rgba(0,133,245,0.3)'
                  }
                ],
                'globalCoord': false
              }
            }
          }
          /*itemStyle: {
            normal: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#55edfd'},
                  {offset: 1, color: '#082eb1'}
                ]
              )
            },
            emphasis: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#55edfd'},
                  {offset: 1, color: '#082eb1'}
                ]
              )
            }
          }*/
        },
        {
          type: 'bar',
          barGap: '-100%',
          itemStyle: {
            color: '#000',
            opacity: 0.2
          },
          barWidth: '40%',
          data: [100, 100, 100, 100, 100],
          z: 5
        }
      ]
    };
  }

  backClick() {
    this.router.navigate(['/machineRoom'],
      {
        queryParams: this.activeItem
      });
  }

  pageChange(v) {
  }

  showTable(key) {
    this.active = key;
    if (!key) {
      setTimeout(() => {
        this.tableIscroll = new window['IScroll']('#tableIscroll', {
          scrollbars: true,
          fadeScrollbars: false,
          mouseWheel: true
        });
      }, 500);
    }
  }
}
