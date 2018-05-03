import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDrag]'
})
export class MyDragDirective {
  _changeParent;
  @Input('appMyDrag') data: any;
  @Output('moveActive')
  moveActive = new EventEmitter();

  @Input('changeData')
  set changeData(name) {
    if (name) {
      this.el.nativeElement.style.position = 'static';
    }
    this._changeParent = name;
  }
  get changeData() {
    return this._changeParent;
  }

  private isDown = false;
  private disX;
  private disY;

  constructor(private el: ElementRef,
              private rr: Renderer2) {
  }

  ngOnInit() {


  }

  // 点击事件
  @HostListener('mousedown', ['$event']) onMousedown(event) {
    this.isDown = true;
    this.disX = event.clientX - this.el.nativeElement.offsetLeft;
    this.disY = event.clientY - this.el.nativeElement.offsetTop;
  }

  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    // 判断该元素是否被点击了。
    if (this.isDown) {
      const newdisX = event.clientX;
      const newdisY = event.clientY;
      this.el.nativeElement.style.width = '242px';
      this.el.nativeElement.style.position = 'absolute';
      this.el.nativeElement.style.background = '#fff';
      this.el.nativeElement.style['z-index'] = 888;
      this.el.nativeElement.style.left = newdisX - this.disX + 'px';
      this.el.nativeElement.style.top = newdisY - this.disY + 'px';
      this.moveActive.emit({
        type: 'move',
        el: this.el,
        data: this.data
      });
    }
  }

  // 监听document离开事件
  @HostListener('document:mouseup', ['$event']) onMouseup() {
    // 只用当元素移动过了，离开函数体才会触发。
    if (this.isDown) {
      this.moveActive.emit({
        type: 'stop',
        el: this.el,
        data: this.data
      });
      this.isDown = false;
    }
  }
}
