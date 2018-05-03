import {Component, OnInit, Input, Output, ElementRef} from '@angular/core';
import {ScaleService} from '../../common/service/scale.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {NgxEchartsService} from 'ngx-echarts';
@Component({
  selector: 'app-pdu',
  templateUrl: './room-pdu.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-pdu.component.less'
  ]
})
export class RoomPduComponent implements OnInit {
  box5 = {
    width: 1486,
    height: 827,
    left: 31,
    top: 59,
  };
  active = true;
  back = {
    width: 96,
    height: 30,
    left: 31 + 20,
    top: 59 + 399,
  };
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

  titleBox = {
    width: 121,
    height: 34,
    left: 90,
    top: 600,
  };
  imgf = {
    width: 537,
    height: 404,
    left: 117+100,
    top: 110,
  }
  itemC1 = {
    width: 120,
    height: 510,
    left: 100,
    top: 60,
  }
  lfDc1 = {
    width: 510,
    height: 250,
    left: 730,
    top: 60,
  }
  lfDc2 = {
    width: 510,
    height: 250,
    left: 730,
    top: 350,
  }

  _currentPage = 1;
  totalcount = 20;

  tableIscroll;
  activeItem = {id: '', name: ''};

  chartOption2 = {};
  chartOption1 = {};


  constructor(public scale: ScaleService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private ngxEchartsService: NgxEchartsService) {
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
    const xData = ['Uac', 'Ubc', 'Ubc'];
    const sData = [27, 13, 25];
    this.chartOption1 = {
      color: ['#00BEEC', '#F53B3C'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
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
          type: 'line',
          // smooth: true,
          symbol: 'image://data:image/png;base64,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',
          symbolSize: 42,
          showSymbol: true,
          areaStyle: {
            normal: {
              color: new this.ngxEchartsService.graphic.LinearGradient(0, 0, 0, 1,
                [{
                  offset: 0,
                  color: 'rgba(0, 136, 212, 1)'
                }, {
                  offset: 0.8,
                  color: 'rgba(0, 136, 212, 0)'
                }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12

            }
          },
          data: sData
        }
      ]
    };
  }
  getChart2() {
    const xData = ['A相相电流', 'B相相电流', 'C相相电流'];
    const sData = [27, 13, 25];
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
    } else {

    }
  }
}
