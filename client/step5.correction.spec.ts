function annotation(target:any,property:string,descriptor:TypedPropertyDescriptor<any>){
    target.annotation = 'blah';
}

@annotation
class Tools {
    annotation:string;

    power(value:number):number {
        return value * value;
    }
}

xdescribe('Step5', ()=> {
    it('Test annotations', ()=> {
        var tools:Tools =new Tools();
        expect(tools.power(7)).toBe(49);
        expect(tools.annotation).toBe('blah');
    });
});