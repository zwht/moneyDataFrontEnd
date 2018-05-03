import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../common/restService/dashboard-service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getCostsList();
  }

  getCostsList() {
    this.dashboardService['list']({
      params: {
        params2: 'list'
      },
      data: {

      }
    })
      .then(response => {
        const rep = (response as any);
        debugger
      });
  }
}
