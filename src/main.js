import {Aurelia} from 'aurelia-framework'
import environment from './environment';
import {UIConfig} from 'aurelia-ui-framework';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-validation', (config) => {

    })
    .plugin('aurelia-ui-virtualization')
    .plugin('aurelia-ui-framework')
    .feature('resources');

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start().then(() => aurelia.setRoot());
}
