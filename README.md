https://adarshpastakia.github.io/aurelia-ui-framework/#/

export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      {route: "", redirect: "view"},
      {route: "view", name: "view", moduleId: "view", nav: true, title: "view"}
    ]);
  }
}

   this.router.navigateToRoute('view');
