var gulp = require('gulp');
var ts = require('gulp-typescript');
var jasmine = require('gulp-jasmine');
var webpackStream = require('webpack-stream');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');
var gutil = require('gulp-util');

gulp.task('compile-back', function () {
    return gulp.src([__dirname + '/back/*.ts', __dirname + '/typings/main.d.ts'])
        .pipe(ts(require('./back/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/back'));
});

gulp.task('compile-front-step6', function () {
    return gulp.src([__dirname + '/front/step6/typescript/**/*.ts', __dirname + '/typings/browser.d.ts'])
        .pipe(ts(require('./front/step6/typescript/tsconfig.json').compilerOptions))
        .pipe(gulp.dest('./target/front'))
});

// gulp.task('compile-front-step7', function () {
//     return gulp.src(['front/step7/Module/TestAppModule.ts'])
//         .pipe(webpackStream(webpackConfig))
//         .pipe(gulp.dest('target/front/step7/'));
// });

gulp.task('step7-dev-server', function () {
    // Start a webpack-dev-server
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, {
        contentBase: __dirname + '/front/step7',
        stats: {
            colors: true
        }
        // server and middleware options
    }).listen(3000, 'localhost', function (err) {
        if (err) throw new gutil.PluginError('webpack-dev-server', err);
        // Server listening
        gutil.log('[webpack-dev-server]', 'http://localhost:3000/webpack-dev-server/index.html');
    });
});

gulp.task('compile', ['compile-back', 'compile-front-step6']);

gulp.task('default', ['compile','step7-dev-server']);