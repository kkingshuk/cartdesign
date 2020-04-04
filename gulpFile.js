// including plugins
var gulp = require('gulp')
, jshint = require("gulp-jshint")
, sass = require("gulp-sass")
, uglify = require("gulp-uglify")
, webserver = require("gulp-webserver");

// task jshint
gulp.task('jshint', function () {
	return gulp.src('./src/js/*.ts') // path to your files
	.pipe(jshint())
	.pipe(jshint.reporter()); // Dump results
});
// task uglify
gulp.task('uglify', function () {
	return gulp.src('./src/js/*.js') // path to your files
	.pipe(uglify())
	.pipe(gulp.dest('./dest/js/'));
});
// task sass2css
gulp.task('sass2css', function () {
	 return gulp.src('src/*.scss')
  .pipe(sass()) // Using gulp-sass
  .pipe(gulp.dest('./dest'))
});
// task start_weserver
gulp.task('start_webserver', function () {
	gulp.src('dest')
    .pipe(webserver({
      host: '0.0.0.0',
      port: 6639,
      livereload: true,
      directoryListing: true,
      open: true
    }));
});
gulp.task('default', gulp.series('jshint', 'uglify', 'sass2css', 'start_webserver'));