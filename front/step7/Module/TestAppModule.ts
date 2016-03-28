module TestApp {
    var module:angular.IModule = angular.module('step7', []);

    module.service('SayHelloService', SayHello.SayHelloService);
    module.controller('SayHelloCtrl', SayHello.SayHelloCtrl);
}