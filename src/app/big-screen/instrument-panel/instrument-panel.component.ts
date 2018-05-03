import {Component, OnInit, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-instrument-panel',
  templateUrl: './instrument-panel.component.html',
  styleUrls: ['./instrument-panel.component.less']
})
export class InstrumentPanelComponent implements OnInit {

  @Input()
  cptData;
  style = {};
  time = 0;
  key = 0;
  sum = 10;
  sc = 1;
  h3Style = {};


  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.key = this.cptData.percentage / this.sum;
    this.setStyle();
    this.sc = this.el.nativeElement.clientWidth / 424;
    this.h3Style = {
      padding: '0 ' + 0.35 * this.sc + 'rem',
      'font-size': 0.35 * this.sc + 'rem',
      height: 0.4 * this.sc + 'rem',
      'line-height': 0.4 * this.sc + 'rem',
      'margin-bottom': 0.1 * this.sc + 'rem'
    };

  }

  setStyle() {
    this.style = {
      transform: 'rotate(' + this.time * this.key / 100 * 180 + 'deg)'
    };
    this.time++;
    if (this.time <= this.sum) {
      setTimeout(() => {
        console.log(this.time);
        this.setStyle();
      }, 5);
    }
  }

}
