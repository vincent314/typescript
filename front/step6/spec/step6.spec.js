describe('Step6 Javascript', function () {
    var ctrl;

    beforeEach(function () {
        module('step6-js');
    });


    beforeEach(inject(['$rootScope', '$controller', function ($rootScope, $controller) {
        ctrl = $controller('HelloCtrl');
    }]));

    it('Test du controleur', function () {
        expect(ctrl.text).toBe('Hello, World');
    });
});