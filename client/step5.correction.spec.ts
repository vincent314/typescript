var model = require('./model');

describe('Step 5',()=>{
   it('Test module',()=>{
       var owner = new model.Person('Doe','John');
       var contract = new model.Contract('0123456', owner);

       expect(contract).toEqual({
           id:'0123456',
           owner:{
               name:'Doe',
               surname:'John'
           }
       });

   });
});