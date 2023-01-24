const Intern = require('../lib/Intern')
test("getRole() should return \"Intern\"", () => {
    const expectedValue = "Intern";
    const e = new Intern("ethan", 1, "Kyle@Ethan.com",'Omar');
    expect(e.getRole()).toBe(expectedValue);
  });,

  test("getSchool() should return \"Mohamed\"", () => {
    const expectedValue = "UMN";
    const e = new Intern("Omar", 1, "Kyle@gmail.com",expectedValue);
    expect(e.getSchool()).toBe(expectedValue);
  });,