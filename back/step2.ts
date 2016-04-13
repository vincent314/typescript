export interface User {
    firstname:string;
    lastname:string;
}

export interface UserWithMobile extends User{
    mobile:string;
}