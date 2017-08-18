//import Backend from 'i18next-xhr-backend';
import environment from '../environment';
// import dfconfig from '../config/dreamfactory-config';
import authconfig from '../config/auth-config';

export function configurePlugins(aurelia, globalConfig) {
    if (environment.testing) {
        aurelia.use
            .plugin('aurelia-testing');
    }

    aurelia.use
      .plugin('aurelia-api', config => {
        config.registerEndpoint('auth');
        config.registerEndpoint('api', 'http://localhost:3000/api/')
      })
      // .plugin('aurelia-interactjs') // Add this line to load interact.js (optional)
      // .plugin('aurelia-editables') // Add this line to load the plugin
      .plugin('aurelia-authentication', baseConfig => {
        baseConfig.configure(authconfig);
      })
      .plugin('aurelia-animator-css');
        // .plugin('aurelia-validation')
        // .plugin('aurelia-i18n', instance => {
        //     instance.i18next.use(Backend);
        //
        //     // default configuration
        //     let setup = {
        //         backend: {
        //             loadPath: './locales/{{lng}}/{{ns}}.json',
        //         },
        //         lng : 'en',
        //         defaultNS: 'translation',
        //         ns: 'translation',
        //         attributes : ['t','i18n'],
        //         fallbackLng : 'en',
        //         debug : environment.debug
        //     };
        //
        //     return instance.setup(setup);
        // })
        // .plugin('aurelia-ui-virtualization')
        // .plugin('aurelia-editables');
}
