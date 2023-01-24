const Engineer = require('../lib/Engineer')
test("getRole() should return \"Engineer\"", () => {
    const expectedValue = "Engineer";
    const e = new Engineer("Mohamed", 1, "Abdullahi@Omar.com",'Kyle');
    expect(e.getRole()).toBe(expectedValue);
  });,

  test("getGithub() should return \"Khatab\"", () => {
    const expectedValue = "Khatabjama";
    const e = new Engineer("Khatab", 1, "Abdullahi@gmail.com",expectedValue);
    expect(e.getGithub()).toBe(expectedValue);
  });,