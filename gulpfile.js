var gulp = require('gulp');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var browserSync = require('browser-sync').create();

function style() {

    return (
        gulp
            .src("assets/sass/*.scss")
            .pipe(sass())
            .on("error", sass.logError)
            .pipe(gulp.dest("assets/css"))
            .pipe(browserSync.stream())
    );
}
exports.style = style;

function watch() {
    browserSync.init({
        server: {
            index: "/index.html"
        }
    });
    gulp.watch('assets/sass/*.scss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
}
exports.watch = watch;