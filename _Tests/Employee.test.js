const Employee = require('../lib/Employee')
test("getRole() should return \"Employee\"", () => {
    const expectedValue = "Employee";
    const e = new Employee("Mohamed", 1, "abdi2k24@gmail.com");
    expect(e.getRole()).toBe(expectedValue);
  });

  test("getName() should return \"Mohamed\"", () => {
    const expectedValue = "Mohamed";
    const e = new Employee("Mohamed", 1, "Mohamed@gmail.com");
    expect(e.getName()).toBe(expectedValue);
  });