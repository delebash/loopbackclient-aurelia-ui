export class Child {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      { route: 'welcome', name: 'welcome',       moduleId: 'welcome',       nav: true, title: 'Welcome' },
      { route: ['','home'], name: 'home',       moduleId: 'home',       nav: true, title: 'home' },

    ]);

    this.router = router;
  }
}
