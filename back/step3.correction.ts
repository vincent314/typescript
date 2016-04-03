export interface IPerson {
    firstname:string;
    lastname:string;
    login:string;
    
    doLogin():boolean;
}

export class User implements IPerson {
    constructor(public firstname:string, public lastname:string, public login:string) {
    };

    doLogin():boolean {
        return this.login == 'AAA';
    }
}