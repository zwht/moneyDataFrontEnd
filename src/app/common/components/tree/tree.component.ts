import { Component, OnInit,Input,Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.less']
})
export class TreeComponent implements OnInit {

  @Input() treeData : any;
  @Input() selectUid :String;

  @Output()
  nodeClick = new EventEmitter();

  expand=false;
  constructor() {}

  ngOnInit() {
    if(this.treeData.SubNodes&&this.treeData.SubNodes.length){
      this.expand = true;
    }
  }
  hello(){
    this.expand = !this.expand;
  }
  nodeCk(){             
    this.nodeClick.emit(this.treeData.UidPath);
  }
  subCk(path){
    this.nodeClick.emit(path);
  }
}
