const Engineer = require('../lib/Engineer');

describe('Initialization', () => {
  it("Should create object with name, id and email if provided", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that new object has correct properties
    expect(engineer.name).toEqual("Shlomo");
    expect(engineer.id).toEqual("ssiegelman");
    expect(engineer.email).toEqual("ssiegelman15@gmail.com");
  })

  it("Should create object with office number if provided", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that new object has correct properties
    expect(engineer.github).toEqual('ssiegelman15');
  })

  it("getRole function should now return 'Engineer' instead of 'Employee'", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that getRole function returns 'Engineer'
    expect(engineer.getRole()).toEqual('Engineer')
  })
})