function printUser(input){
    return [input.firstName.toUpperCase(),input.lastName.toUpperCase()].join(' ');
}

console.log(printUser({
    firstName:'John',
    lastName: 'Doe'
}));