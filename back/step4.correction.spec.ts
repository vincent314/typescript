/// <reference path="../typings/tsd.d.ts" />
global['power'] = function power(value) {
    return value * value;
};

declare function power(value:number):number;

describe('Step4', ()=> {
    it('Test power with number', ()=> {
        expect(power(5)).toBe(25);
    });

    it('Test power with string', ()=> {
        //expect(power('blah')).toBe('');
    });
});