const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task("minify-html", function () {
  return gulp
    .src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhiteSpace: true,
        removeComments: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest("./public"));
});
