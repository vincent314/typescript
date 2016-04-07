import {User} from "../Model/UserModel";
export class SayHelloService {

    public getUser():User {
        var user:User = new User();
        user.firstName = "John";
        user.lastName = "Doe";
        user.login = "jdoe";

        return user;
    }
}