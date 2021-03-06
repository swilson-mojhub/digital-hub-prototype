const gulp = require('gulp');
const child = require('child_process');
const browsersync = require('browser-sync');
const sass = require('gulp-sass');
const jekyll = process.platform === "win32" ? "jekyll.bat" : "jekyll";

gulp.task('default', ['copyGovAssets', 'sass','jekyll', 'browsersync'])
gulp.task('copyGovAssets', ['copyGovAssets'])
gulp.task('build', ['sass', 'jekyll'])
gulp.task('server', ['jekyll-local', 'browsersync'])

gulp.task('jekyll-local', (done) => {
  return child.spawn(jekyll, ['build',
    '--incremental',
    '--drafts',
    '--baseurl',
    '/'
  ])
  .on('close', done);
})

gulp.task('jekyll', (done) => {
  return child.spawn(jekyll, ['build',
    '--incremental',
    '--drafts',
    '--destination',
    'docs',
    '--baseurl',
    '/digital-hub-prototype'

  ])
  .on('close', done);
})

gulp.task('browsersync', () => {
  browsersync({
    server: {
      baseDir: '_site'
    },
    files: '_site/**',
    port: 4000
    })
  gulp.watch('**/*.{html,markdown,md,yml,json,xml}', ['jekyll'])
});

gulp.task('copyGovAssets', () => {
   gulp.src('./node_modules/govuk_frontend_toolkit/images/**/*.png')
   .pipe(gulp.dest('./assets/images'));
   gulp.src('./node_modules/govuk_frontend_toolkit/javascripts/**/*.js')
   .pipe(gulp.dest('./assets/toolkit/javascripts'));
   gulp.src('./node_modules/govuk_frontend_toolkit/stylesheets/**/*.scss')
   .pipe(gulp.dest('./assets/toolkit/scss'));
});

gulp.task('sass', () => {
  return gulp.src('./assets/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/stylesheets'))
});
