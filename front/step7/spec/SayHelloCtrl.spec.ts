///<reference path="../../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../../typings/angularjs/angular-mocks.d.ts" />
///<reference path="../../../typings/angularjs/angular.d.ts" />

import IControllerService = angular.IControllerService;
import SayHelloCtrl = TestApp.SayHello.SayHelloCtrl;
describe('Test SayHelloCtrl', ()=> {
    beforeEach(() => angular.mock.module('step7'));

    it('Test initialisation', inject(['$controller'],($controller:IControllerService)=>{
        $controller(SayHelloCtrl);
    }));
});