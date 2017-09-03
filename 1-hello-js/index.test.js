var greet = require("./");

test("Hello, JS", () => {
  expect(greet("JS")).toBe("Hello, JS!");
});