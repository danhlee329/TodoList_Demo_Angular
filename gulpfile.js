/// <binding BeforeBuild='sass' Clean='sass' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp"),
    rimraf = require("rimraf"),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify"),
    sass = require("gulp-sass"),
    fontAwesome = require("node-font-awesome");

var paths = {
    webroot: "./"
};

paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";
paths.scss = paths.webroot + "css/**/*.scss";
paths.css = paths.webroot + "css/**/*.css";
paths.minCss = paths.webroot + "css/**/*.min.css";
paths.concatJsDest = paths.webroot + "js/site.min.js";

paths.concatCssDest = paths.webroot + "css/final.css";
paths.fontsDir = paths.webroot + "fonts/";

// Main task to be called
gulp.task("setup",
          [
            "fonts",
            "sass"
          ]);

// Sets up fonts to use in app (using node-font-awesome)
gulp.task('fonts', function() {
  gulp.src(fontAwesome.fonts)
      .pipe(gulp.dest(paths.fontsDir));
});

// Compiles all sass files and concatentates them into a single css
gulp.task("sass", function () {
    return gulp.src([
            paths.scss,
            fontAwesome.scssPath + "/**/*.scss"
        ])
      .pipe(sass())
      .pipe(concat(paths.concatCssDest))
      .pipe(gulp.dest('.'));
});

// TODO: refine tasks below and implement in the future
/* Clean tasks */
gulp.task("clean:js", function (cb) {
    rimraf(paths.concatJsDest, cb);
});

gulp.task("clean:css", function (cb) {
    rimraf(paths.concatCssDest, cb);
});

gulp.task("clean", ["clean:js", "clean:css"]);

/* Minify tasks */
gulp.task("min:js", function () {
    return gulp.src([paths.js, "!" + paths.minJs], { base: "." })
        .pipe(concat(paths.concatJsDest))
        .pipe(uglify())
        .pipe(gulp.dest("."));
});

gulp.task("min:css", function () {
    return gulp.src([paths.css, "!" + paths.minCss])
        .pipe(concat(paths.concatCssDest))
        .pipe(cssmin())
        .pipe(gulp.dest("."));
});

gulp.task("min", ["min:js", "min:css"]);