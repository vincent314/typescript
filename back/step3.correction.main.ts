import {User, IPerson} from './step3.correction';

function toString(person:IPerson) {
    return [person.firstname, person.lastname, person.login].join(',');
}
var john:User = new User('John', 'Doe', 'AAA');
console.log(toString(john));

var other:User = new User('Anonymous', 'Anonymous', 'Anonymous');
console.log(toString(other));