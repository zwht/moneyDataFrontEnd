import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../common/restService/dashboard-service';
import { NgxEchartsService } from 'ngx-echarts';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  list = [];
  chartOption = {}

  constructor(private dashboardService: DashboardService,
    private ngxEchartsService: NgxEchartsService) { }

  ngOnInit() {
    this.getCostsList();
  }

  getCostsList() {
    this.dashboardService['list']({
      params: {
        params2: 'list'
      },
      data: {
        startTime: (new Date().getTime()) - 1000 * 60 * 60 * 24,
        endTime: new Date().getTime() + 1000 * 60 * 60 * 24,
        name: ['ht']
      }
    })
      .then(response => {
        const rep = (response as any);
        this.list = rep.data;
        let xD = [];
        let sD = [];
        this.list.forEach(item => {
          xD.push(item.time);
          sD.push(item.value)
        })

        this.setChart(xD, sD);
        //debugger
      });
    setTimeout(() => {
      this.getCostsList()
    }, 10000)
  }

  setChart(xD, sD) {
    var upColor = '#00da3c';
    var upBorderColor = '#008F28';
    var downColor = '#ec0000';
    var downBorderColor = '#8A0000';

    this.chartOption = {
      title: {
        text: 'HT',
        left: 0
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['分钟K线']
      },
      grid: {
        left: '10%',
        right: '10%',
        bottom: '15%'
      },
      xAxis: {
        type: 'category',
        data: xD,
        scale: true,
        boundaryGap: false,
        axisLine: { onZero: false },
        splitLine: { show: false },
        splitNumber: 20,
        min: 'dataMin',
        max: 'dataMax'
      },
      yAxis: {
        scale: true,
        splitArea: {
          show: true
        }
      },
      dataZoom: [
        {
          type: 'inside',
          start: 50,
          end: 100
        },
        {
          show: true,
          type: 'slider',
          y: '90%',
          start: 50,
          end: 100
        }
      ],
      series: [
        {
          name: '日K',
          type: 'candlestick',
          data: sD,
          itemStyle: {
            normal: {
              color: upColor,
              color0: downColor,
              borderColor: upBorderColor,
              borderColor0: downBorderColor
            }
          },
          markPoint: {
            label: {
              normal: {
                formatter: function (param) {
                  return param != null ? Math.round(param.value) : '';
                }
              }
            },
            data: [
              {
                name: 'XX标点',
                coord: ['2013/5/31', 2300],
                value: 2300,
                itemStyle: {
                  normal: { color: 'rgb(41,60,85)' }
                }
              },
              {
                name: 'highest value',
                type: 'max',
                valueDim: 'highest'
              },
              {
                name: 'lowest value',
                type: 'min',
                valueDim: 'lowest'
              },
              {
                name: 'average value on close',
                type: 'average',
                valueDim: 'close'
              }
            ],
            tooltip: {
              formatter: function (param) {
                return param.name + '<br>' + (param.data.coord || '');
              }
            }
          },
          markLine: {
            symbol: ['none', 'none'],
            data: [
              [
                {
                  name: 'from lowest to highest',
                  type: 'min',
                  valueDim: 'lowest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                },
                {
                  type: 'max',
                  valueDim: 'highest',
                  symbol: 'circle',
                  symbolSize: 10,
                  label: {
                    normal: { show: false },
                    emphasis: { show: false }
                  }
                }
              ],
              {
                name: 'min line on close',
                type: 'min',
                valueDim: 'close'
              },
              {
                name: 'max line on close',
                type: 'max',
                valueDim: 'close'
              }
            ]
          }
        }
      ]
    };
  }
}
