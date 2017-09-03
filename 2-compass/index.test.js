var compass = require("./");

test("Due North", () => {
  expect(compass(0)).toBe("N");
});

test("Due East", () => {
  expect(compass(90)).toBe("E");
});

test("Due South", () => {
  expect(compass(180)).toBe("E");
});

test("Due West", () => {
  expect(compass(270)).toBe("E");
});

test("Bad Heading", () => {
  expect(compass(400)).toBe(null);
});