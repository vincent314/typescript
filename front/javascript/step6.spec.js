describe('Step6 Javascript', function () {
    var ctrl;

    beforeEach(function () {
        module('test-javascript');
    });


    beforeEach(inject(['$rootScope', '$controller', function ($rootScope, $controller) {
        ctrl = $controller('HelloCtrl');
    }]));

    it('Test du controleur', function () {
        expect(ctrl.text).toBe('Hello, World');
    });
});