const Manager = require('../lib/Manager');

describe('Initialization', () => {
  it("Should create object with name, id and email if provided", () => {
    const manager = new Manager('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 15);

    // Verify that new object has correct properties
    expect(manager.name).toEqual("Shlomo");
    expect(manager.id).toEqual("ssiegelman");
    expect(manager.email).toEqual("ssiegelman15@gmail.com");
  })

  it("Should create object with office number if provided", () => {
    const manager = new Manager('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 15);

    // Verify that new object has correct properties
    expect(manager.officeNumber).toEqual(15);
  })

  it("getRole function should now return 'Manager' instead of 'Employee'", () => {
    const manager = new Manager('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 15);

    // Verify that getRole function returns 'Manager'
    expect(manager.getRole()).toEqual('Manager')
  })
})