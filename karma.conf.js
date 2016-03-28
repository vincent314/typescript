var webpackConfig = require('./webpack.config');

module.exports = function (config) {
    config.set({
        //browsers : ['Chrome'],
        browsers: ['PhantomJS'],

        frameworks: ['jasmine'],

        files: [
            // 'bower_components/angular/angular.js',
            // 'bower_components/angular-mocks/angular-mocks.js',
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            // 'front/step6/javascript/*.js',
            // 'front/step6/spec/*.js',
            'front/**/*.js'
        ],

        preprocessors: {
            'front/**/*.ts': ['webpack']
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },

        plugins: [
            //'karma-chrome-launcher',
            'karma-phantomjs2-launcher',
            'karma-jasmine',
            'karma-typescript-preprocessor2',
            'karma-webpack'
        ]
    });
};
