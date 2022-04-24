const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school
  }

  getRole() {
    return this.constructor.name
  }
}

module.exports = Intern;