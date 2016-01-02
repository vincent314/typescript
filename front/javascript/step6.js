(function () {
    angular.module('step6', [])
        .controller('HelloCtrl', HelloCtrl);

    function HelloCtrl(){
        var vm = this;
        vm.text = 'Hello, World';
    }
})();