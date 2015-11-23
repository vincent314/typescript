/// <reference path="../node_modules/definitely-typed-jasmine/jasmine.d.ts" />
import {User,IPerson} from './step3.correction';

describe('Step3', ()=> {
    function toString(person:IPerson) {
        return [person.firstname, person.lastname].join(',');
    }

    it('Test des interfaces', ()=> {
        var john:User = new User('John','Doe','AAA');
        var other:User = new User('Anonymous','Anonymous','Anonymous');

        expect(john.doLogin()).toBe(true);
        expect(other.doLogin()).toBe(false);

        expect(toString(john)).toBe('John,Doe,AAA');
        expect(toString(other)).toBe('Anonymous,Anonymous,Anonymous');
    });
});