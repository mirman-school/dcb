var greet = require("./");

test("Hello, JS", () => {
  expect(greet("JS")).toBe("Hello, JS!");
});

test("Hello, Bob", () => {
  expect(greet("Bob")).toBe("Hello, Bob!");
});