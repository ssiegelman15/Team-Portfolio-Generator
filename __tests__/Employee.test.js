const Employee = require('../lib/Employee');

describe('Initialization', () => {
  it("Should create object with name, id and email if provided", () => {
    const employee = new Employee('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com');

    // Verify that new object has correct properties
    expect(employee.name).toEqual("Shlomo");
    expect(employee.id).toEqual("ssiegelman");
    expect(employee.email).toEqual("ssiegelman15@gmail.com");
  })

  it("Functions should return constructor inputs", () => {
    const employee = new Employee('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com');

    // Verify that class functions return constructor inputs when called
    expect(employee.getName()).toEqual(employee.name);
    expect(employee.getId()).toEqual(employee.id);
    expect(employee.getEmail()).toEqual(employee.email);
  })

  it("getRole should return 'Employee'", () => {
    const employee = new Employee('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com');

    // Verify that class functions return constructor inputs when called
    expect(employee.getRole()).toEqual('Employee');
  })
});