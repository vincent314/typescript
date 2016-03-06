import {Person,Contract} from "./model";

describe('Step 5', ()=> {
    it('Test module', ()=> {
        var owner = new Person('Doe', 'John');
        var contract = new Contract('0123456', owner);

        expect(contract).toEqual({
            id: '0123456',
            owner: {
                name: 'Doe',
                surname: 'John'
            }
        });

    });
});