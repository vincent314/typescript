/// <reference path="../typings/jasmine/jasmine.d.ts" />
import {User} from "./step2.correction";

describe('Step2 - Classes', () => {
    it('Test nouvelle classe', () => {
        var user = new User('John', 'Doe');
        user.mobile = '0123456789';
        expect(user.toString()).toBe('John Doe 0123456789');
    });
});