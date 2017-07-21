var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');

gulp.task('minify-css', function() {
  return gulp.src('src/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./'));
});

gulp.task('minify-html', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({ collapseWhiteSpace: true }))
    .pipe(gulp.dest('./'));
});
