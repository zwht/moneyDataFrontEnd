import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMyDragBox]'
})
export class MyDragBoxDirective {
  ulList: any;
  bb: any;
  _changeParent;

  @Input('appMyDragBox') data: any;
  @Input('moveActiveObj') moveActiveObj: any;

  @Input('changeData1')
  set changeData1(name) {
    if (this.bb) {
      this.bb.remove();
    }
    this._changeParent = name;
  }

  get changeData1() {
    return this._changeParent;
  }

  @Output('moveBoxActive')
  moveBoxActive = new EventEmitter();

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.getUlList();
  }

  getUlList() {
    this.ulList = this.el.nativeElement.querySelectorAll('.itemBox');
    if (!this.ulList || !this.ulList.length) {
      setTimeout(() => {
        this.getUlList();
      }, 1000);
    }
  }

  getActiveLi(event) {
    let key = '';
    this.ulList.forEach((item, i) => {
      const leftC = event.clientX - item.offsetLeft;
      const topC = event.clientY - item.offsetTop;
      const widht = item.clientWidth;
      const hieght = item.clientHeight;
      if (leftC > 0 && topC > 0 && leftC < widht && topC < hieght) {
        key = i;
      }
    });
    return key;
  }


  setMoveObjView(event, index) {
    if (this.bb) {
      this.bb.remove();
    }
    let bigItem = this.ulList[index];
    let subItem = bigItem.querySelectorAll('.item');
    let subIndex = this.getActiveItem(event, subItem);
    this.bb = this.renderer.createElement('div');
    this.renderer.addClass(this.bb, 'moveHover');

    if (subIndex === '') {
      bigItem.append(this.bb);
    } else {
      subItem[subIndex].before(this.bb);
    }
    return subIndex;
  }

  getActiveItem(event, subItem) {
    let key = '';
    subItem.forEach((item, i) => {
      const leftC = event.clientX - item.offsetLeft;
      const topC = event.clientY - item.offsetTop - 10;
      const widht = item.clientWidth;
      const hieght = item.clientHeight + 10;
      if (leftC > 0 && topC > 0 && leftC < widht && topC < hieght) {
        key = i;
      }
    });
    return key;
  }

  // 监听document移动事件事件
  @HostListener('document:mousemove', ['$event']) onMousemove(event) {
    const index = this.getActiveLi(event);
    let subIndex = '';
    if (index !== '' && this.moveActiveObj && this.moveActiveObj.type === 'move') {
      subIndex = this.setMoveObjView(event, index);
    } else {
      if (this.bb) {
        this.bb.remove();
      }
    }
    this.moveBoxActive.emit({index, subIndex});
  }
}
