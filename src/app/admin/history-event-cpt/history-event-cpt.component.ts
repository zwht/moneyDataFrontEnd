import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../common/shared.module';
import {HttpClient} from '@angular/common/http';
import {AdminService} from  '../../common/restService/admin-service';
import { DateFormat } from '../../common/service/date-format';

@Component({
  selector: 'app-history-event-cpt',
  templateUrl: './history-event-cpt.component.html',
  styleUrls: ['./history-event-cpt.component.less']
})
export class HistoryEventCptComponent implements OnInit {
  todayEvent = 0;
  totalcount= 0;
  pagecount = 0;
  _currentPage = 1;
  _pageSize = 15;
  matchOptions = [
    {
      label:"等于",
      value:"="
    },
    {
      label:"大于",
      value:">"
    },
    {
      label:"大于等于",
      value:">="
    },
    {
      label:"小于",
      value:"<"
    },
    {
      label:"小于等于",
      value:"<="
    }
  ]
  levelOptions = [
    {
      label:"级别零",
      value:0
    },
    {
      label:"级别一",
      value:1
    },
    {
      label:"级别二",
      value:2
    },
    {
      label:"级别三",
      value:3
    },
    {
      label:"级别四",
      value:4
    },
    {
      label:"级别五",
      value:5
    },
    {
      label:"级别六",
      value:6
    },
    {
      label:"级别七",
      value:7
    },
    {
      label:"级别八",
      value:8
    },
    {
      label:"级别九",
      value:9
    },
  ]
  tableSourceData = [];
  pageData = [];
  tableHeader = [];
  chartOption4 ={};
  queryData={
    BeginTime:new Date(),
    EndTime:new Date(),
    LevelMatch:'=',
    LevelEv:undefined,
    Keyword:undefined
  };
  constructor(
    private dateFilter : DateFormat,
    private ajaxFn : AdminService,
  ) {}
  queryClick(){
    let BeginTime = this.dateFilter.trans(this.queryData.BeginTime,'yyyy-MM-dd')
    let EndTime =  this.dateFilter.trans(this.queryData.EndTime,'yyyy-MM-dd')
    let params = {
      'BeginTime':BeginTime,
      'EndTime':EndTime
    }
    if(this.queryData.LevelEv !== undefined){
      params['LevelEv'] = this.queryData.LevelEv;
      params['LevelMatch'] = this.queryData.LevelMatch;
    }
    if(this.queryData.Keyword){
      params['Keyword'] = this.queryData.Keyword;
    }
    this.query(
      params,
      res=>{
        this.tableHeader = res.heads;
        this.tableSourceData = res.Events;
        this.totalcount = res.Events.length;
        this.pagecount = Math.ceil(this.totalcount/this._pageSize);
        this.pageChange(1)
      }
    )
  }
  pageChange(v){
    // this._currentPage = v;
    let start = (v-1)*this._pageSize;
    let end = Math.min(v*this._pageSize,this.totalcount) ;
    this.pageData = this.tableSourceData.slice(start,end)
  }
  ngOnInit() {
    let now = new Date();
    let BeginTime = this.dateFilter.trans(now,'yyyy-MM-dd')
    let EndTime = this.dateFilter.trans(now,'yyyy-MM-dd')
    this.query(
      {BeginTime,EndTime},
      res=>{
        this.tableHeader = res.heads;
        this.tableSourceData = res.Events;
        this.totalcount = res.Events.length;
        this.pagecount = Math.ceil(this.totalcount/this._pageSize);
        this.todayEvent = res.Events.length;
        this.pageChange(1)
      }
    )
    this.chartOption4 = {
      tooltip: {
        show:false
      },
      legend: {
        show:false,
      },
      color:['#ffffff','#6aeddc', '#4ad1ee', '#57c7f5', '#429ce8','#2b80df',  '#2c69da', '#2c51da','#4a31e0'],
      series: [
            {
              name:'级别分类',
              type:'pie',
              hoverAnimation:false,
              radius: ['40%', '65%'],
              label:{
                normal: {
                    show: false
                },
                emphasis:{
                  show: true,
                  color:"#c2e6f8",
                  backgroundColor:"rgba(20,60,160,0.5)",
                  padding:[3,5,4,5],
                  borderRadius:2,
                  formatter:'{b} : {d}%'
                }
              },
              center:['40%','50%'],
              labelLine: {
                  normal: {
                      show: false
                  },
                  emphasis:{
                    show: true,
                    lineStyle:{
                      color:'#54b1df'
                    },
                  }
              },
              emphasis:{
                itemStyle:{
                  'box-shadow':"0px 0px 1px 10px #fff",
                  shadowColor: 'rgba(255, 255,255 , 0.5)',
                  shadowBlur: 4,
                }
              },
              itemStyle:{
                borderWidth :2,
                borderColor :"#204ea5",
                shadowColor: 'rgba(32, 78,165 , 1)',
                shadowBlur: 4,
              },
              backgroundColor:"#000",
              data:[
                  {value:35, name:'级别一'},
                  {value:45, name:'级别二'},
                  {value:35, name:'级别三'},
                  {value:35, name:'级别四'},
                  {value:65, name:'级别五'},
                  {value:23, name:'级别六'},
                  {value:18, name:'级别七'},
                  {value:48, name:'级别八'},
                  {value:46, name:'级别九'},
              ]
          }
      ]
    };
  }
  query(params,call){
    this.ajaxFn['historyEvent']({params}).then(call)
  }
  exportTable(){
    let tableToExcel = (function() {  
      let uri = 'data:application/vnd.ms-excel;base64,',  
          template = '<html><head><meta charset="UTF-8"></head><body><table border="1">{table}</table></body></html>',  
          base64 = function(s) { return window.btoa((window as any).unescape(encodeURIComponent(s))) },
          format = function(s, c) {  
              return s.replace(/{(\w+)}/g,function(m, p) { return c[p]; }) 
          }  
      return function(table, name,filename) {  
          if (!table.nodeType) table = document.getElementById(table)  
          let ctx = {worksheet: name || 'Worksheet', table: table.innerHTML};
          let link = document.createElement("a");
          link.href = uri + base64(format(template, ctx));
          link.download = filename;
          link.click();
      }  
    })()
    tableToExcel('history-event-table','name','历史事件');
  }
}
