import {User, UserWithMobile} from "./step2";

// Type any
var user1:any = {
    firstname: 'John',
    lastname: 'Doe',
    mobile : '0123456789',
    other : 'Autres données'
};

console.log([user1.firstname,user1.lastname,user1.mobile].join(' '));

// instance classe mère
var user2:User = {
    firstname: 'Anna',
    lastname: 'Graham'
};
console.log([user2.firstname,user2.lastname /*,user2.mobile*/ ].join(' '));

// instance clases fille
var user3:UserWithMobile = {
    firstname: 'Anna',
    lastname: 'Graham',
    mobile: '00000000'
};
console.log([user3.firstname,user3.lastname, user3.mobile].join(' '));
