/// <reference path="../typings/jasmine/jasmine.d.ts" />
import {hello as h, power as p} from "./step1.correction";

describe('Step1', () => {
    it('Test Hello Vincent', () =>
        expect(h('Vincent')).toBe('Hello, Vincent')
    );

    it('Test 7²==49', () =>
        expect(p(7)).toBe(49)
    );
});