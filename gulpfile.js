var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var Server = require('karma').Server;

gulp.task('compile-back', function () {
    return gulp.src(['./back/**/*.ts'])
        .pipe(ts(require('./back/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/back'));
});

gulp.task('compile-front-step6',function(){
   return gulp.src(['./front/step6/typescript/**/*.ts'])
       .pipe(ts(require('./front/step6/typescript/tsconfig.json').compilerOptions))
       .pipe(gulp.dest('./target/front'))
});

gulp.task('compile-front-step6-spec',function(){
   return gulp.src(['./front/step6/spec/**/*.ts'])
       .pipe(ts(require('./front/step6/spec/tsconfig.json').compilerOptions))
       .pipe(gulp.dest('./target/front'))
});

gulp.task('compile-front-step7',function(){
    return gulp.src(['./front/step7/**/*.ts'])
        .pipe(ts(require('./front/step7/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/front'))
});

gulp.task('compile',['compile-back','compile-front-step6', 'compile-front-step6-spec','compile-front-step7']);

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