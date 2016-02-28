export interface IContract {
    id:string,
    owner:IPerson
}

export interface IPerson {
    name:string,
    surname:string
}


export class Contract implements IContract{
    constructor(public id:string, public owner:IPerson) {
    }
}

export class Person implements IPerson{
    constructor(public name:string, public surname:string) {
    }
}