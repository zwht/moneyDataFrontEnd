import { Component, OnInit, Input, Output, ElementRef } from '@angular/core';
import { ScaleService } from '../../common/service/scale.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgxEchartsService } from 'ngx-echarts';
@Component({
  selector: 'app-energy',
  templateUrl: './room-energy.component.html',
  styleUrls: [
    '../commonCss/roomBack.less',
    '../commonCss/box5.less',
    '../commonCss/table-bo.less',
    '../commonCss/cp-title.less',
    './room-energy.component.less'
  ]
})
export class RoomEnergyComponent implements OnInit {
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

  barFk= {
    width: 500,
    height: 400,
    left: 60,
    top: 130,
  }
  titleBox = {
    width: 205,
    height: 71,
    left: 600+60,
    top: 130,
  }
  til1 = {
    width: 180,
    height: 50,
    left: 600+60,
    top: 180,
  };
  til2 = {
    width: 180,
    height: 50,
    left: 600 + 330+60,
    top: 180,
  };
  lfDc2 = {
    width: 500,
    height: 290,
    left: 600+60,
    top: 280,
  }

  _currentPage = 1;
  totalcount = 20;

  tableIscroll;
  activeItem = { id: '', name: '' };
  chartOption2 = {};



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
    this.getChart2();
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
          splitLine: { show: false }
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
          splitLine: { show: false }
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
