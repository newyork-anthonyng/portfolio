var gulp = require('gulp');
var merge = require('merge-stream');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', function() {
  var small = gulp.src('src/small.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
  var large = gulp.src('src/large.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));

  return merge(small, large);
});

gulp.task('minify-html', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhiteSpace: true }))
    .pipe(gulp.dest('./'));
});
