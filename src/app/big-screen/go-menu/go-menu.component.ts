import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-go-menu',
  templateUrl: './go-menu.component.html',
  styleUrls: ['./go-menu.component.less']
})
export class GoMenuComponent implements OnInit {

  title = {
    width: 534,
    height: 70,
    left: 690,
    top: 20,

  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goPag(url) {
    this.router.navigate([url], {
      queryParams: {}
    });
  }
}
