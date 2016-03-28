import icontrollerservice = angular.icontrollerservice;
import sayhelloctrl = testapp.sayhello.sayhelloctrl;

describe('Test SayHelloCtrl', ()=> {
    beforeeach(() => angular.mock.module('step7'));{}

    it('test initialisation', inject(['$controller'], ($controller:icontrollerservice)=> {
        $controller(sayhelloctrl);
    }));
});