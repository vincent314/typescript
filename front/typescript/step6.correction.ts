///<reference path="../../typings/angularjs/angular.d.ts" />

angular.module('test-typescript', [])
    .controller('HelloCtrlTs', HelloCtrlTs);


class HelloCtrlTs {
    public text:string;

    constructor() {
        this.text = 'Hello, World';
    }
}