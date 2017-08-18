import {Router} from 'aurelia-router';
import { inject } from 'aurelia-framework';

@inject(Router)
export class Welcome{

  constructor(router){
    this.router = router
  }
  activate(){
    this.router.navigateToRoute('page-view');
  }

}
