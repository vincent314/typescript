export interface IPerson {
    firstname:string;
    lastname:string;
    login:string;
}

export class User implements IPerson{
    constructor(public firstname:string,public lastname:string,public login:string) {
    };

    doLogin():boolean{
        return this.login=='AAA';
    }
}