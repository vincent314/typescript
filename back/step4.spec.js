function power(value){
    return value * value;
}

describe('Step4', function () {
    it('Test variable d\'ambiance', function () {
        expect(power(7)).toBe(49);
    });
});