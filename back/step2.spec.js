var User = require('./step2');

describe('Step2 - Classes', function () {
    it('Test nouvelle classe', function () {
        var user = new User('John', 'Doe');
        expect(user.toString()).toBe('John Doe');
    });
});