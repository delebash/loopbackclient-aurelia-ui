import gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import processSvg from './process-svg';
import processCSS from './process-css';
import processSASS from './process-sass';
import {build} from 'aurelia-cli';
import project from '../aurelia.json';
import dist from './dist';
import clean from './clean';
import copyFiles from './copy-files';
import {CLIOptions} from 'aurelia-cli';

export default gulp.series(
  readProjectConfiguration,
  cleandist,
  gulp.parallel(
    transpile,
    processMarkup,
    processSvg,
    processSASS,
    processCSS
  ),
  writeBundles,
  dist,
  copyResorces
);

let main;

if (CLIOptions.taskName() === 'build' && CLIOptions.hasFlag('watch')) {
  main = gulp.series(
    build,
    (done) => { watch(); done(); }
  );
} else {
  main = build;
}

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}

function copyResorces(done) {
  copyFiles(done);
}

function cleandist(done) {
  if (CLIOptions.taskName() === 'build' && !CLIOptions.hasFlag('watch')) {
    console.log('build');
    clean(done);
  } else {
    console.log('Skipping: already cleaned on watch');
    done()
  }
}

// if (CLIOptions.instance.args.length == 0){
//   console.log('build')
//   console.log(CLIOptions.instance)
//   copyFiles(done);
// }else {
//   if (!CLIOptions.hasFlag('watch')) {
//     console.log('watch')
//     //   console.log(CLIOptions.instance)
//   }else{
//     // copyFiles(done);
//   }
// }
