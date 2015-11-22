/// <reference path="../node_modules/definitely-typed-jasmine/jasmine.d.ts" />
var step1_correction_1 = require("./step1.correction");
describe('Step1', function () {
    it('Test Hello Vincent', function () {
        return expect(step1_correction_1.hello('Vincent')).toBe('Hello, Vincent');
    });
    it('Test 7²==49', function () {
        return expect(step1_correction_1.power(7)).toBe(49);
    });
});
//# sourceMappingURL=step1.correction.spec.js.map