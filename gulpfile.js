const gulp = require('gulp');
const browserSync = require('browser-sync');
const connect = require('gulp-connect');
const webpack = require("webpack");
const nodemon = require('nodemon');
const rename = require("gulp-rename");
const watch = require('gulp-watch');
const webpackConfig = "./webpack.config.js";

function reload(done) {
  return new Promise((resolve, reject) => {
    webpack(require(webpackConfig), (err, stats) => {
      if (err) {
        return reject(err);
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats));
      }
      resolve();
    });
  });
}

// Nodemon task:
// Start nodemon once and execute callback (browser-sync)
gulp.task('nodemon', cb => {
  let started = false;
  return nodemon({
    script: 'index.js'
  }).on('start', () => {
    if (!started) {
      cb();
      started = true;
    }
  });
});

gulp.task('reload', reload)


gulp.task('install-jquery', () => {
  return gulp.src('node_modules/jquery/dist/jquery.js')
  .pipe(gulp.dest('./public/js'));
})

gulp.task('nhs-toolkit-install-js', () => {
  return gulp.src('node_modules/nhsuk-frontend/dist/nhsuk-4.1.0.min.js')
  .pipe(rename("nhsuk.min.js"))
  .pipe(gulp.dest('./public/js'));
});

gulp.task('nhs-toolkit-install-css', () => {
  return gulp.src('node_modules/nhsuk-frontend/dist/nhsuk-4.1.0.min.css')
  .pipe(rename("nhsuk.min.css"))
  .pipe(gulp.dest('./public/css'));
});

gulp.task('nhs-toolkit-install-favicons', () => {
  return gulp.src('node_modules/nhsuk-frontend/packages/assets/favicons/*')
  .pipe(gulp.dest('./public/images/favicons/'));
});

gulp.task('nhs-toolkit-install-icons', () => {
  return gulp.src('node_modules/nhsuk-frontend/packages/assets/icons/*')
  .pipe(gulp.dest('./public/images/icons/'));
});

gulp.task('nhs-toolkit-install-logos', () => {
  return gulp.src('node_modules/nhsuk-frontend/packages/assets/logos/*')
  .pipe(gulp.dest('./public/images/logos/'));
});

gulp.task('nhs-toolkit-install', gulp.series('nhs-toolkit-install-js', 'nhs-toolkit-install-css', 'nhs-toolkit-install-favicons', 'nhs-toolkit-install-icons', 'nhs-toolkit-install-logos'));

// BrowserSync task:
// calls nodemon tasks and pass itself as callback
gulp.task('browser-sync', () => {
  watch(['./templates/**/*'], (done) => {gulp.series(['reload'])(done)});
  watch(['./public/**/*'], (done) => {gulp.series(['reload'])(done)});
  browserSync.init({proxy: 'localhost:8080/',});
});

gulp.task('build', gulp.series(['install-jquery', 'nhs-toolkit-install']));
gulp.task('default', gulp.series(['build', 'nodemon']));
gulp.task('watch', gulp.series(['build', 'nodemon', 'browser-sync']));
