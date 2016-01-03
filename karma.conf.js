module.exports = function(config) {
  config.set({
	//browsers : ['Chrome'],
	browsers : ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
		'bower_components/angular/angular.js',
      	'bower_components/angular-mocks/angular-mocks.js',
		'front/step6/javascript/*.js',
		'front/step6/spec/*.js',
		'target/front/step6/*.js'
    ],

	plugins : [
		//'karma-chrome-launcher',
		'karma-phantomjs-launcher',
		'karma-jasmine'
		]
  });
};
