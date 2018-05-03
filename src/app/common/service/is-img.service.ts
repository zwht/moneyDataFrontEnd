import {Injectable} from '@angular/core';

@Injectable()
export class IsImgService {

  constructor() {
  }

  ifImg(item) {
    const aa = ['png', 'jpeg', 'gif', 'jpg'];
    let key = false;
    aa.forEach(ite => {
      if (item.type.indexOf(ite) !== -1) {
        key = true;
      }
    });
    return key;
  }

  imgErr(event) {
    event.target.src = './assets/images/empty.png';
  }

}
