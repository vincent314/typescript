/// <reference path="../node_modules/definitely-typed-jasmine/jasmine.d.ts" />
/// <reference path="./step3.correction.ts" />
import {User} from './step3.correction';

describe('Step3', ()=> {
    function toString(user:User) {
        return user.firstname + ' ' + user.lastname;
    }

    it('Test des interfaces', ()=> {
        var john:User = new User();

        john.firstname = 'John';
        john.lastname = 'Doe';

        expect(toString(john)).toBe('John Doe');
    });
});