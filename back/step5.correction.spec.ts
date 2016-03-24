import {Person,Contract} from "./model";

describe('Step 5', ()=> {
    it('Test module', ()=> {
        var owner = new Person('Doe', 'John');
        var contract = new Contract('0123456', owner);

        var expected:Contract = {
            id: '0123456',
            owner: <Person>{
                name: 'Doe',
                surname: 'John'
            }
        };

        expect(contract).toEqual(expected);
    });
});