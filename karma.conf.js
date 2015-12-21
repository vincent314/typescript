module.exports = function(config) {
  config.set({
	//browsers : ['Chrome'],
	browsers : ['PhantomJS'],

    frameworks: ['jasmine'],

    files: [
		'bower_components/angular/angular.js',
      	'bower_components/angular-mocks/angular-mocks.js',
		'front/javascript/*.js',
		'target/front/*.js'
    ],

	plugins : [
		//'karma-chrome-launcher',
		'karma-phantomJS-launcher',
		'karma-jasmine'
		]
  });
};
