export class User {
    public mobile:string;

    constructor(public firstname:string, public lastname:string) {
    }

    toString():string {
        return this.firstname + " " + this.lastname + " " + this.mobile;
    }
}