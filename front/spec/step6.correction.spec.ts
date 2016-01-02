///<reference path="../../typings/jasmine/jasmine.d.ts" />
///<reference path="../../typings/angularjs/angular-mocks.d.ts" />
import IScope = angular.IScope;
import IRootScopeService = angular.IRootScopeService;
import IControllerService = angular.IControllerService;

describe('Step6 Typescript', ()=> {
    var ctrl:HelloCtrlTs;

    beforeEach(() => angular.mock.module('test-typescript'));

    beforeEach(inject(['$rootScope', '$controller', ($rootScope:IRootScopeService, $controller:IControllerService) => {
        ctrl = $controller(HelloCtrlTs);
    }]));

    it('Test du controleur', () => expect(ctrl.text).toBe('Hello, World'));
});