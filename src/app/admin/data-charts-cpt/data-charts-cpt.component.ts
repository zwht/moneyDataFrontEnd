import { Component, OnInit ,Input} from '@angular/core';
import { DateFormat } from '../../common/service/date-format';
import { AdminService } from '../../common/restService/admin-service';

@Component({
  selector: 'app-data-charts-cpt',
  templateUrl: './data-charts-cpt.component.html',
  styleUrls: ['./data-charts-cpt.component.less']
})
export class DataChartsCptComponent implements OnInit {
  orgTreeData=null;
  treeSelectUid = "";
  currenClass=1;
  tableHead = [
      '参数',
      '周一',
      '周er',
      '周3',
      '周肆',
  ];
  queryData = {
    Begintime:null
  }
  tableSourceData = [
      ['hahah',3,5,56,2],
  ];
  constructor(
    private ajaxFn : AdminService,
) { }
// chartData
  ngOnInit() {
      this.getTreeData();
  }
  getTreeData(){
    (this.ajaxFn as any).omnipotent({}).then(
        res=>{
            this.orgTreeData = res;
        }
    )
  }
  treeNodeClick(v){
      console.log('来咯',v)
      this.treeSelectUid = v;
  }
  queryClick(){

  }
  exportTable(){

  }

}
