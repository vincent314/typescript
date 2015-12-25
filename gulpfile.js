var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('compile-back', function () {
    return gulp.src(['./back/*.ts'])
        .pipe(ts(require('./back/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/back'));
});

gulp.task('compile-front',function(){
   return gulp.src(['./front/typescript/*.ts'])
       .pipe(ts(require('./front/typescript/tsconfig.json').compilerOptions))
       .pipe(gulp.dest('./target/front'))
});

gulp.task('compile',['compile-back','compile-front']);