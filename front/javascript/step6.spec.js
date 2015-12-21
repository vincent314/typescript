describe('Step6 Javascript', function () {
    var $scope, ctrl;

    beforeEach(function () {
        module('test-javascript');
    });


    beforeEach(inject(['$rootScope', '$controller', function ($rootScope, $controller) {
        $scope = $rootScope.$new();
        ctrl = $controller('HelloCtrl', {
            $scope: $scope
        });
    }]));

    it('Test du controleur', function () {
        expect(ctrl.text).toBe('Hello, World');
    });
});