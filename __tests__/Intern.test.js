const Intern = require('../lib/Intern');

describe('Initialization', () => {
  it("Should create object with name, id, email & school if provided", () => {
    const intern = new Intern('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'Rutgers');

    // Verify that new object has correct properties
    expect(intern.name).toEqual("Shlomo");
    expect(intern.id).toEqual("ssiegelman");
    expect(intern.email).toEqual("ssiegelman15@gmail.com");
    expect(intern.school).toEqual("Rutgers");
  })

  it("Should return name of school", () => {
    const intern = new Intern('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'Rutgers');

    // Verify that new object has correct properties
    expect(intern.getSchool()).toEqual('Rutgers');
  })

  it("getRole function should now return 'intern' instead of 'Employee'", () => {
    const intern = new Intern('Shlomo', 'ssiegelman', 'ssiegelman15@gmail.com', 'Rutgers');

    // Verify that getRole function returns 'intern'
    expect(intern.getRole()).toEqual('Intern')
  })
})