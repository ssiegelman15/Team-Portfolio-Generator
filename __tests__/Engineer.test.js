const Engineer = require('../lib/Engineer');

describe('Initialization', () => {
  it("Should create object with name, id, email & github username if provided", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that new object has correct properties
    expect(engineer.name).toEqual("Shlomo");
    expect(engineer.id).toEqual("ssiegelman");
    expect(engineer.email).toEqual("ssiegelman15@gmail.com");
    expect(engineer.github).toEqual('ssiegelman15');
  })

  it("Should return Github username", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that new object has correct properties
    expect(engineer.getGithub()).toEqual('ssiegelman15');
  })

  it("getRole function should now return 'Engineer' instead of 'Employee'", () => {
    const engineer = new Engineer('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'ssiegelman15');

    // Verify that getRole function returns 'Engineer'
    expect(engineer.getRole()).toEqual('Engineer')
  })
})