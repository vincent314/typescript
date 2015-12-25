var h = require('./step1').hello;
var p = require('./step1').power;

describe('Step1 - modules', function () {
    it('Test Hello Vincent', function () {
        expect(h('Vincent')).toBe('Hello, Vincent');
    });

    it('Test 7²==49', function () {
        expect(p(7)).toBe(49);
    });
});