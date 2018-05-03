import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CodeService} from '../../common/restService/code-service';

@Component({
  selector: 'app-code-list',
  templateUrl: './code-list.component.html',
  styleUrls: ['./code-list.component.less'],
  providers: []
})
export class CodeListComponent implements OnInit {
  list = [];
  total = 0;
  pageNum = 1;
  pageSize = 10;
  loading = false;

  constructor(private codeService: CodeService,
              private router: Router) {
  }

  ngOnInit() {
    this.getList();
  }

  getList() {
    this.loading = true;
    (this.codeService as any).list({
    })
      .then(response => {
        this.loading = false;
        const rep = (response as any);
        if (rep.errorCode === 0) {
          this.list = response.data;
        } else {
          console.log(response);
        }
      });
  }

  add(item) {
    this.router.navigate(['/admin/other/code/add'], {queryParams: {id: item ? item.id : ''}});
  }

  del(id) {
    (this.codeService as any).del({params: {id}})
      .then(response => {
        const rep = (response as any);
        if (rep.code === 200) {
          this.getList();
        } else {
          console.log(response);
        }
      });
  }

}
