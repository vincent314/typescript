class HelloCtrlTs {
    public text:string;

    constructor() {
        this.text = 'Hello, World';
    }
}

angular.module('step6-ts', [])
    .controller('HelloCtrlTs', HelloCtrlTs);