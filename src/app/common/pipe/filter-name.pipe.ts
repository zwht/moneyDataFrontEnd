import {Pipe, PipeTransform} from '@angular/core';
import {SetCodeService} from '../service/set-code.service';

@Pipe({
  name: 'filterName'
})

export class FilterNamePipe implements PipeTransform {

  private listObj = {
    '任务优先级颜色': {
      201: 'green',
      202: 'orange',
      203: '#f50'
    },
    '文件类型图片': {
      '0': 'icon-wenjianjia',
      'av': 'icon-shipin'
    }
  };

  constructor(private setCodeService: SetCodeService) {
  }

  transform(value: any, args?: any): any {
    if (this.listObj[args][value]) {
      return this.listObj[args][value];
    } else {
      return value;
    }
  }

}
