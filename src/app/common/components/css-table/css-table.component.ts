import { Component, OnInit ,Input } from '@angular/core';
class eventListenObj{
  event:String
  call:Function
}
class headItem{
  name:String;
  key:String;
  on:eventListenObj
}
@Component({
  selector: 'app-css-table',
  templateUrl: './css-table.component.html',
  styleUrls: ['./css-table.component.less']
})
export class CssTableComponent implements OnInit {

  @Input() tableHead: Array<headItem>;
  @Input() tableDate: Array<Object>;

  constructor() { }

  ngOnInit() {
  }

}
