


export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: '',              moduleId: 'welcome',   title: 'Select'},
    ]);

  }
}
