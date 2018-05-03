import {Directive, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren, ViewContainerRef} from '@angular/core';

declare var IScroll: any;

@Directive({
  selector: '[appIScoll5]'
})
export class IScoll5Directive {

  @ViewChildren('name')
  todoNames: QueryList<ElementRef>;

  constructor(private templateRef: TemplateRef<any>,
              private el: ElementRef,
              private viewContainer: ViewContainerRef) {
    this.viewContainer.createEmbeddedView(this.templateRef);


  }

  ngAfterViewInit() {

  }

  ngOnInit() {

  }


}
