///<reference path="./SayHelloService" />
///<reference path="../Model/UserModel" />

module TestApp.SayHello{
    export class SayHelloCtrl{
        user:TestApp.Model.User;
        constructor(SayHelloService:TestApp.SayHello.SayHelloService){
            this.user = SayHelloService.getUser();
        }
    }
}