import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operation-instructions-cpt',
  templateUrl: './operation-instructions-cpt.component.html',
  styleUrls: ['./operation-instructions-cpt.component.less']
})
export class OperationInstructionsCptComponent implements OnInit {
  searcStart = "";
  searcEnd = "";
  searchKey = "";
  selectedOption = "";
  totalcount=155;
  pagecount = 0;
  modelShow =  false;
  _currentPage = 1;
  modelTitle = "新增规则";
  options=[
    '操作日志',
    '系统日志'
  ];
  tableSourceData = [
    {
      biubiu:"haha",
      hello:'hl nmb',
      hahha:"老铁666"
    }
  ];
  tableHeader = [
    {
      name:"表头一",
      key:'biubiu',
    }, {
      name:"表头二",
      key:'hello',
    }, {
      name:"表头三",
      key:'hahha',
    },
  ];
  constructor() {}
  pageChange(v){
    alert(v)
  }
  edit(c){
    this.modelTitle = "编辑规则";
    this.modelShow = true;
  }
  addRule(){
    this.modelTitle = "新增规则";
    this.modelShow = true;
  }
  ngOnInit() {
    this.pagecount = Math.ceil(this.totalcount/10);
    
  }
}
