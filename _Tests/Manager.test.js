const Manager = require('../lib/Manager')
test("getRole() should return \"Manager\"", () => {
    const expectedValue = "Manager";
    const e = new Manager("Abdullahi", 1, "Abdirahman@Gmail.com",'123');
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getOfficeNumber() should return \"Jama\"", () => {
    const expectedValue = "123";
    const e = new Manager("Mohamed", 1, "Mohamed@gmail.com",expectedValue);
    expect(e.getOfficeNumber()).toBe(expectedValue);
  });