var fs = require('fs');

var UsersMock = function() {};

UsersMock.prototype.data = JSON.parse(fs.readFileSync('users_final.json').toString());

UsersMock.prototype.getAll = function() {
    return this.data;
};

UsersMock.prototype.getById = function(id) {
    return this.data.find(function(user) {
        return user.id == id;
    })
};

UsersMock.prototype.getByName = function(name) {
    return this.data.filter(function(user) {
        var fullName = user.name.first + ' ' + user.name.last;
        return fullName.includes(name);
    });
}

UsersMock.prototype.getByEmail = function(email) {
    return this.data.filter(function(user) {
        return user.email.includes(email);
    });
}

module.exports = new UsersMock();