const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const uglify = require('gulp-uglify-es').default;

gulp.task('minify-css', function() {
  return gulp.src('src/styles.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-html', function() {
  return gulp.src('src/index.html')
    .pipe(htmlmin({
      collapseWhiteSpace: true,
      removeComments: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('./public'));
});

gulp.task('minify-js', function() {
  return gulp.src('sw.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public'));
});

gulp.task('copy-assets', ['manifest', 'static']);

gulp.task('manifest', function() {
  return gulp.src('manifest.json')
    .pipe(gulp.dest('./public/'));
});

gulp.task('static', function() {
  return gulp.src('static/*')
    .pipe(gulp.dest('./public/static'));
});
