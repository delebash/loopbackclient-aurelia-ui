import {Router} from 'aurelia-router'
import {inject} from 'aurelia-framework'

@inject(Router)
export class App {

  configureRouter(config, router) {

    config.title = 'Contacts';
    config.map([
      {route: ['', "welcome"], name: "welcome", moduleId: "welcome", nav: true, title: "Welcome"},
      {route: "page-view", name: "page-view", moduleId: "page-view", nav: true, title: "My App"}
    ]);
  }

  constructor(router) {
    this.router = router
  }
}
