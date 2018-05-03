import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../common/restService/admin-service';
import { DateFormat } from '../../common/service/date-format';

@Component({
  selector: 'app-operation-note-cpt',
  templateUrl: './operation-note-cpt.component.html',
  styleUrls: ['./operation-note-cpt.component.less']
})
export class OperationNoteCptComponent implements OnInit {
  totalcount=155;
  pagecount = 0;
  _currentPage = 1;
  _pageSize = 15;
  queryData={
    BeginTime:new Date(),
    EndTime:new Date(),
    LogType:undefined,
    Keyword:undefined,
    type:"s"
  };
  logTypes=[
    {
      label:"系统日志",
      value:"s"
    },
    {
      label:"操作日志",
      value:"o"
    },
  ]
  todayLog = 0 ;
  pageData=[];
  tableSourceData = [];
  tableHeader = [];
  chartOption4 ={}
  constructor(
    private dateFilter : DateFormat,
    private ajaxFn : AdminService,
  ) {}
  pageChange(v){
    // this._currentPage = v;
    let start = (v-1)*this._pageSize;
    let end = Math.min(v*this._pageSize,this.totalcount) ;
    this.pageData = this.tableSourceData.slice(start,end)
  }


  queryClick(){
    let BeginTime = this.dateFilter.trans(this.queryData.BeginTime,'yyyy-MM-dd')
    let EndTime =  this.dateFilter.trans(this.queryData.EndTime,'yyyy-MM-dd')
    let params = {
      'BeginTime':BeginTime,
      'EndTime':EndTime
    }
    if(this.queryData.type=='s')
    this.queryS(
      params,
      res=>{
        this.tableHeader = res.Heads;
        this.tableSourceData = res.Logs;
        this.totalcount = res.Logs.length;
        this.pagecount = Math.ceil(this.totalcount/this._pageSize);
        this.pageChange(1)
      }
    )
    else
    this.queryO(
      params,
      res=>{
        this.tableHeader = res.Heads;
        this.tableSourceData = res.Logs;
        this.totalcount = res.Logs.length;
        this.pagecount = Math.ceil(this.totalcount/this._pageSize);
        this.pageChange(1)
      }
    )
  }
  ngOnInit() {
    
    this.chartOption4 = {
      tooltip: {
        show:false
      },
      legend: {
        show:false,
      },
      color:['#2b80df','#4a31e0'],
      series: [
            {
              name:'级别分类',
              type:'pie',
              hoverAnimation:false,
              radius: '80%',
              label:{
                normal: {
                  position:"inner",
                  show: true,
                  color:"#c2e6f8",
                  // backgroundColor:"rgba(20,60,160,0.5)",
                  padding:[3,5,4,5],
                  borderRadius:2,
                  formatter:'{d}% \n {b}'
                },
              },
              center:['50%','50%'],
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
                  shadowBlur: 1,
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
                  {value:35, name:'操作日志'},
                  {value:45, name:'系统日志'},
              ]
          }
      ]
    };

    let now = new Date();
    let BeginTime = this.dateFilter.trans(now,'yyyy-MM-dd')
    let EndTime = this.dateFilter.trans(now,'yyyy-MM-dd')
    this.queryS(
      {BeginTime,EndTime},
      res=>{
        this.tableHeader = res.Heads;
        this.tableSourceData = res.Logs;
        this.totalcount = res.Logs.length;
        this.pagecount = Math.ceil(this.totalcount/this._pageSize);
        this.pageChange(1)
      }
    )
  }
  queryS(params,call){
    this.ajaxFn['LogSys']({params}).then(call)
  }
  queryO(params,call){
    this.ajaxFn['LogOpr']({params}).then(call)
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
    tableToExcel('logs-table','name','操作日志');
  }

}
