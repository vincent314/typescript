var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var Server = require('karma').Server;

gulp.task('compile-back', function () {
    return gulp.src(['./back/**/*.ts', './typings/main.d.ts'])
        .pipe(ts(require('./back/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/back'));
});

gulp.task('compile-front',function(){
   return gulp.src(['./front/**/*.ts','./typings/browser.d.ts'])
       .pipe(ts(require('./front/tsconfig.json').compilerOptions))
       .pipe(gulp.dest('./target'))
});

// gulp.task('compile-front-step6-spec',function(){
//    return gulp.src(['./front/step6/spec/**/*.ts'])
//        .pipe(ts(require('./front/tsconfig.json').compilerOptions))
//        .pipe(gulp.dest('./target/front'))
// });
//
// gulp.task('compile-front-step7',function(){
//     return gulp.src(['./front/step7/**/*.ts'])
//         .pipe(ts(require('./front/step7/tsconfig.json').compilerOptions))
//         .pipe(gulp.dest('./target/front'))
// });

gulp.task('compile',['compile-back','compile-front']);

gulp.task('test-back',['compile'],function() {
    return gulp.src(['./target/back/*.js'])
        .pipe(jasmine({
            verbose:true
        }));
});

gulp.task('test-front', ['compile'], function (done) {
    new Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun:true
    },function(err){
        console.log(err);
        done();
    }).start();
});

gulp.task('default', ['test-back', 'test-front']);