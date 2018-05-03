import {Directive, Input, ElementRef} from '@angular/core';
import {ScaleService} from '../service/scale.service';

@Directive({
  selector: '[appScaleBox]'
})
export class ScaleBoxDirective {

  @Input('appScaleBox')
  appScaleBox: any;
  @Input('scaleDiv')
  scaleDiv: any;

  constructor(private scale: ScaleService,
              private el: ElementRef) {
  }

  ngOnInit() {
    this.setStyle();
    this.scale.sizeChangObservable.subscribe(value => {
      this.scale = value;
      this.setStyle();
    });
  }

  setStyle() {
    this.el.nativeElement.style.position = 'absolute';
    this.el.nativeElement.style.width = (this.scale.widthScale * this.appScaleBox.width) + 'px';
    this.el.nativeElement.style.height = (this.scale.heightScale * this.appScaleBox.height) + 'px';
    if (this.scaleDiv) {
      this.el.nativeElement.style.top = this.scale.heightScale * this.appScaleBox.top + 'px';
      this.el.nativeElement.style.left = this.scale.widthScale * this.appScaleBox.left + 'px';
    } else {
      this.el.nativeElement.style.top = (this.scale.heightScale * this.appScaleBox.top + this.scale.top) + 'px';
      this.el.nativeElement.style.left = (this.scale.widthScale * this.appScaleBox.left + this.scale.left) + 'px';
    }
  }
}
