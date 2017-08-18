export class App {

  configureRouter(config, router) {
    config.title = 'Contacts';
    config.map([
      { route: ['',"hello"],  moduleId: 'hello',   title: 'Hello', nav: true },
      { route: "bye",  moduleId: 'bye',   title: 'Bye', nav: true}
    ]);
    this.router = router;
  }
}
