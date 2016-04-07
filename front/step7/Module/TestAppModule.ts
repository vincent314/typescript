import angular = require('angular');
import {SayHelloService} from '../SayHello/SayHelloService';
import {SayHelloCtrl} from '../SayHello/SayHelloCtrl';

var app:angular.IModule = angular.module('step7', []);

app.service('SayHelloService', SayHelloService);
app.controller('SayHelloCtrl', SayHelloCtrl);