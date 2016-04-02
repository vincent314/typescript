module.exports = User;

function User(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}

User.prototype.toString = function () {
    return this.firstname + ' ' + this.lastname;
};
