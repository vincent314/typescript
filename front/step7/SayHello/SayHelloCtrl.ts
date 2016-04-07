import {SayHelloService} from "./SayHelloService";
import {User} from "../Model/UserModel";
export class SayHelloCtrl {
    user:User;

    constructor(SayHelloService:SayHelloService) {
        this.user = SayHelloService.getUser();
    }
}