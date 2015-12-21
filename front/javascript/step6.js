(function () {
    angular.module('test-javascript', [])
        .controller('HelloCtrl', HelloCtrl);

    function HelloCtrl(){
        var vm = this;
        vm.text = 'Hello, World';
    }
})();