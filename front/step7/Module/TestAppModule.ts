///<reference path="../../../typings/angularjs/angular.d.ts" />
///<reference path="../SayHello/SayHelloCtrl" />
///<reference path="../SayHello/SayHelloService" />
module TestApp {
    var module:angular.IModule = angular.module('step7', []);

    module.service('SayHelloService', SayHello.SayHelloService);
    module.controller('SayHelloCtrl', SayHello.SayHelloCtrl);
}