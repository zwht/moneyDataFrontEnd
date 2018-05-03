import {Component, OnInit} from '@angular/core';
import {ScaleService} from '../../../common/service/scale.service';
import {NgxEchartsService} from 'ngx-echarts';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
  logo = {
    width: 136,
    height: 38,
    left: 31,
    top: 10,
  };
  titleLeft = {
    width: 510,
    height: 50,
    left: 180,
    top: 20,
  };
  titleRight = {
    width: 510,
    height: 50,
    left: 534 + 690,
    top: 20,
  };
  title = {
    width: 534,
    height: 70,
    left: 690,
    top: 20,
  };
  box1 = {
    width: 460,
    height: 140,
    left: 31,
    top: 59,
  };
  box2 = {
    width: 460,
    height: 171,
    left: 31,
    top: 210,
  };
  minTitle2 = {
    width: 223,
    height: 35,
    left: 31 + 30,
    top: 210 + 15,
  };
  box2Bar = {
    width: 390,
    height: 100,
    left: 31 + 30,
    top: 210 + 55,
  };
  box3 = {
    width: 460,
    height: 251,
    left: 31,
    top: 392,
  };
  minTitle3 = {
    width: 223,
    height: 35,
    left: 31 + 30,
    top: 392 + 15,
  };
  box4 = {
    width: 460,
    height: 232,
    left: 31,
    top: 654,
  };
  minTitle4 = {
    width: 223,
    height: 35,
    left: 31 + 30,
    top: 654 + 15,
  };
  box5 = {
    width: 916,
    height: 827,
    left: 502,
    top: 59,
  };
  minTitle9 = {
    width: 119,
    height: 30,
    left: 502 + 694,
    top: 59 + 656,
  };
  box55 = {
    width: 180,
    height: 120,
    left: 502 + 694,
    top: 59 + 656 + 40,
  };
  box6 = {
    width: 460,
    height: 244,
    left: 1429,
    top: 59,
  };
  minTitle6 = {
    width: 223,
    height: 35,
    left: 1429 + 30,
    top: 59 + 15,
  };
  box7 = {
    width: 460,
    height: 571,
    left: 1429,
    top: 315,
  };
  minTitle7 = {
    width: 223,
    height: 35,
    left: 1429 + 30,
    top: 315 + 15,
  };
  box7Text1 = {
    width: 120,
    height: 70,
    left: 1429 + 86,
    top: 315 + 482,
  };
  box7Text2 = {
    width: 214,
    height: 50,
    left: 1429 + 239,
    top: 315 + 482,
  };
  box8 = {
    width: 1858,
    height: 163,
    left: 31,
    top: 897,
  };
  minTitle8 = {
    width: 223,
    height: 35,
    left: 31 + 30,
    top: 897 + 15,
  };

  chartOption = {};
  chartOption2 = {};
  chartOption3 = {};
  chartOption4 = {};
  chartOption5 = {};
  chartOption6 = {};

  constructor(private scale: ScaleService,
              private http: HttpClient,
              private ngxEchartsService: NgxEchartsService) {
  }

  ngOnInit() {
    this.chartOption = {
      color: ['#00BEEC', '#F53B3C'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      legend: {
        data: [
          {
            name: '设备数',
            icon: 'circle'
          },
          {
            name: '报警数',
            icon: 'circle'
          }
        ],
        right: 20,
        top: 20,
        orient: 'vertical',
        textStyle: {
          color: '#FFF'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
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
          data: [10, 52, 200, 334, 390, 330, 220],
          itemStyle: {
            normal: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#00BEEC'},
                  {offset: 1, color: '#051D45'}
                ]
              )
            },
            emphasis: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 0, 1,
                [
                  {offset: 0, color: '#00BEEC'},
                  {offset: 1, color: '#051D45'}
                ]
              )
            }
          }
        },
        {
          name: '报警数',
          type: 'bar',
          data: [10, 52, 200, 334, 390, 330, 220],
          itemStyle: {
            normal: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 1, 1,
                [
                  {offset: 0, color: '#FC3C3C'},
                  {offset: 1, color: '#4E0606'}
                ]
              )
            },
            emphasis: {
              color: new this.ngxEchartsService.graphic.LinearGradient(
                0, 0, 1, 1,
                [
                  {offset: 0, color: '#FC3C3C'},
                  {offset: 1, color: '#4E0606'}
                ]
              )
            }
          }
        }
      ]
    };
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
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['电量仪', '蓄电池', '行间空调', '恒温机', '新风机'],
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
          data: [60, 52, 94, 84, 32],
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
    this.chartOption3 = {
      color: ['#00BEEC', '#F53B3C'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['4月3日', '4月13日', '4月23日', '5月7日', '5月23日'],
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
          smooth: true,
          symbol: 'image://data:image/png;base64,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',
          symbolSize: 42,
          type: 'line',
          data: [38, 5, 82, 3, 37, 3],
        }
      ]
    };
    this.chartOption4 = {
      color: ['#00BEEC', '#F53B3C'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['4月3日', '4月13日', '4月23日', '5月7日', '5月23日'],
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
          data: [60, 96, 125, 4, 92]
        }
      ]
    };
    this.chartOption5 = {
      color: ['#1949e7', '#ffc517', '#7e39ea', '#39b5ea'],
      tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
          type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      /*legend: {
        textStyle: {
          color: '#fff'
        },
        left: 'center',
        bottom: 10,
        data: [
          {name: 'IT功率', icon: 'circle'},
          {name: '空调功率', icon: 'circle'},
          {name: '配电功率', icon: 'circle'},
          {name: 'UPS总数', icon: 'circle'},
          {name: '市电总数', icon: 'circle'},
          {name: '空调总数', icon: 'circle'},
          {name: '机柜总数', icon: 'circle'}
        ]
      },*/
      series: [
        {
          name: '访问来源1',
          type: 'pie',
          center: ['35%', '40%'],
          radius: ['30%', '50%'],
          avoidLabelOverlap: false,
          labelLine: {
            lineStyle: {color: '#fff'}
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: 14 * this.scale.widthScale,
                fontWeight: 'bold',
                color: '#fff'
              },
              formatter: function (p) {
                return p.name + '\n' + p.value;
              }
            }
          },
          data: [
            {value: 335, name: 'IT功率'},
            {value: 310, name: '空调功率'},
            {value: 234, name: '配电功率'}
          ]
        },
        {
          name: '访问来源',
          type: 'pie',
          center: ['65%', '40%'],
          radius: ['0', '50%'],
          avoidLabelOverlap: false,
          labelLine: {
            lineStyle: {color: '#fff'}
          },
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: 14 * this.scale.widthScale,
                fontWeight: 'bold',
                color: '#fff'
              },
              formatter: function (p) {
                return p.name + '\n' + p.value;
              }
            }
          },
          data: [
            {value: 335, name: 'UPS总数'},
            {value: 310, name: '市电总数'},
            {value: 234, name: '空调总数'},
            {value: 135, name: '机柜总数'}
          ]
        }
      ]
    };

    const geoCoordMap = {
      '长春': [125.8154, 44.2584],
      '长沙': [113.0823, 28.2568],
      '贵阳': [106.6992, 26.7682],
      '西安': [109.1162, 34.2004],
      '深圳': [114.5435, 22.5439],
      '济南': [117.1582, 36.8701],
      '海口': [110.3893, 19.8516],
      '沈阳': [123.1238, 42.1216],
      '武汉': [114.3896, 30.6628],
      '昆明': [102.9199, 25.4663],
      '杭州': [119.5313, 29.8773],
      '成都': [103.9526, 30.7617],
      '拉萨': [91.1865, 30.1465],
      '天津': [117.4219, 39.4189],
      '合肥': [117.29, 32.0581],
      '呼和浩特': [111.4124, 40.4901],
      '哈尔滨': [127.9688, 45.368],
      '北京': [116.4551, 40.2539],
      '南京': [118.8062, 31.9208],
      '南宁': [108.479, 23.1152],
      '南昌': [116.0046, 28.6633],
      '乌鲁木齐': [87.9236, 43.5883],
      '上海': [121.4648, 31.2891]
    };

    const data = [
      {
        name: '长春',
        value: 90
      }, {
        name: '长沙',
        value: 10
      }, {
        name: '贵阳',
        value: 20
      }, {
        name: '西安',
        value: 20
      }, {
        name: '深圳',
        value: 20
      }, {
        name: '济南',
        value: 50
      }, {
        name: '海口',
        value: 58
      }, {
        name: '沈阳',
        value: 64
      }, {
        name: '武汉',
        value: 68
      }, {
        name: '昆明',
        value: 45
      }, {
        name: '杭州',
        value: 68
      }, {
        name: '成都',
        value: 49
      }, {
        name: '拉萨',
        value: 66
      }, {
        name: '天津',
        value: 86
      }, {
        name: '合肥',
        value: 58
      }, {
        name: '呼和浩特',
        value: 59
      }, {
        name: '哈尔滨',
        value: 95
      }, {
        name: '北京',
        value: 68
      }, {
        name: '南京',
        value: 56
      }, {
        name: '南宁',
        value: 89
      }, {
        name: '南昌',
        value: 48
      }, {
        name: '乌鲁木齐',
        value: 49
      }, {
        name: '上海',
        value: 78
      }];

    function formtGCData(geoData, data, srcNam, dest) {
      const tGeoDt = [];
      if (dest) {
        for (let i = 0, len = data.length; i < len; i++) {
          if (srcNam !== data[i].name) {
            tGeoDt.push({
              coords: [geoData[srcNam], geoData[data[i].name]]
            });
          }
        }
      } else {
        for (let i = 0, len = data.length; i < len; i++) {
          if (srcNam !== data[i].name) {
            tGeoDt.push({
              coords: [geoData[data[i].name], geoData[srcNam]]
            });
          }
        }
      }
      return tGeoDt;
    }

    function formtVData(geoData, data, srcNam) {
      const tGeoDt = [];
      for (let i = 0, len = data.length; i < len; i++) {
        const tNam = data[i].name;
        if (srcNam !== tNam) {
          tGeoDt.push({
            name: tNam,
            value: geoData[tNam]
          });
        }

      }
      tGeoDt.push({
        name: srcNam,
        value: geoData[srcNam],
        symbolSize: 8,
        itemStyle: {
          normal: {
            color: 'red',
            borderColor: '#000'
          }
        }
      });
      return tGeoDt;
    }

    const planePath = 'arrow';

    this.http.get('assets/map/json/china.json')
      .subscribe(geoJson => {
        // hide loading:
        // register map:
        this.ngxEchartsService.registerMap('china', geoJson);
        // update options:
        this.chartOption6 = {
          tooltip: {
            trigger: 'item',
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              }
            },
            roam: true,
            silent: true,
            itemStyle: {
              normal: {
                areaColor: 'rgba(12,30,137,0.8)',
                borderColor: '#fff'
              },
              emphasis: {
                areaColor: '#2a333d'
              }
            }
          },
          series: [{
            type: 'lines',
            zlevel: 2,
            effect: {
              show: true,
              period: 6,
              trailLength: 0.1,
              color: '#db9982',
              symbol: planePath,
              symbolSize: 8
            },
            lineStyle: {
              normal: {
                color: '#a6c84c',
                width: 1,
                opacity: 0.4,
                curveness: 0.2
              }
            },
            data: formtGCData(geoCoordMap, data, '长沙', true)
          },
            {

              type: 'lines',
              zlevel: 2,
              effect: {
                show: true,
                period: 6,
                trailLength: 0.1,
                color: 'maroon',
                symbol: planePath,
                symbolSize: 8
              },
              lineStyle: {
                normal: {
                  color: '#a6c84c',
                  width: 1,
                  opacity: 0.4,
                  curveness: 0.2
                }
              },
              data: formtGCData(geoCoordMap, data, '长沙', false)
            },
            {

              type: 'effectScatter',
              coordinateSystem: 'geo',
              zlevel: 2,
              rippleEffect: {
                period: 4,
                scale: 2.5,
                brushType: 'stroke'
              },
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  formatter: '{b}'
                }
              },
              symbolSize: 5,
              itemStyle: {
                normal: {
                  color: '#0D6695',
                  borderColor: 'gold'
                }
              },

              data: formtVData(geoCoordMap, data, '长沙')
            }]
        };
      });

    this.http.get('http://192.168.101.64:2779', {
      headers: {'content-type': 'application/json'}
    })
      .subscribe(data => {
        //debugger;
      });
    $.ajax({
      url: 'http://192.168.101.64:2779/v1',
      success: function (data) {
        //debugger;

      }
    });
  }

}
