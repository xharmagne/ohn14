var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

var sassPaths = [
  'bower_components/foundation/scss'
];

gulp.task('sass', function () {
    gulp.src('./scss/rego.scss')
      .pipe(sass({
          style: 'compressed',
          includePaths: sassPaths,
          errLogToConsole: true
      }).on('error', sass.logError))
      .pipe(minifyCSS())
      .pipe(gulp.dest('./css'));
});
