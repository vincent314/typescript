var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('build', function () {
    return gulp.src(['./client/*.ts','./lib/*.ts'])
        .pipe(ts(require('./client/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target'));
});