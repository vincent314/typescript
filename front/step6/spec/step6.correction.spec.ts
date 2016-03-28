describe('Step6 Typescript', ()=> {
    import IScope = angular.IScope;
    import IRootScopeService = angular.IRootScopeService;
    import IControllerService = angular.IControllerService;

    var ctrl:HelloCtrlTs;

    beforeEach(() => angular.mock.module('step6-ts'));

    beforeEach(inject(['$rootScope', '$controller', ($rootScope:IRootScopeService, $controller:IControllerService) => {
        ctrl = $controller(HelloCtrlTs);
    }]));

    it('Test du controleur', () => expect(ctrl.text).toBe('Hello, World'));
});