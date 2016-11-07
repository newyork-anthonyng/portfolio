var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
//var concatCSS = require('gulp-concat-css');

gulp.task('minify-css', function() {
	return gulp.src('public/styles/*.css')
		.pipe(cleanCSS())
		.pipe(concat('style.min.css'))
		.pipe(gulp.dest('public'));
});
