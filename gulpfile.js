const gulp = require('gulp');

// import dartSass from 'sass';
// import gulpSass from 'gulp-sass';

const dartSass = require('sass');
const gulpSass = require('gulp-sass');

const sass = gulpSass(dartSass);


gulp.task("sass", () => {
    return gulp.src("./src/scss/styles.scss")
        .pipe(sass({outputStyle: "expanded"}))
        .pipe(gulp.dest("./dist/css/"))
});

gulp.task("watch", () => {
    gulp.watch("./src/scss/**/*.scss", (done) => gulp.series(["sass"])(done));
});