const Employee = require('../lib/Employee');

describe('Initialization', () => {
  it("Should create object with name, id and email if provided", () => {
    const employee = new Employee('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com');

    // Verify that new object has correct properties
    expect(employee.name).toEqual("Shlomo");
    expect(employee.id).toEqual("ssiegelman");
    expect(employee.email).toEqual("ssiegelman15@gmail.com");
  })
});