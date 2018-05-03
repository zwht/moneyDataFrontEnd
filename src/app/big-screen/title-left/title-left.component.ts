import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-title-left',
  templateUrl: './title-left.component.html',
  styleUrls: ['./title-left.component.less']
})
export class TitleLeftComponent implements OnInit {
  titleLeft = {
    width: 510,
    height: 50,
    left: 180,
    top: 20,
  };
  logo = {
    width: 136,
    height: 38,
    left: 31,
    top: 10,
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goIndex() {
    this.router.navigate(['']);
  }

}
