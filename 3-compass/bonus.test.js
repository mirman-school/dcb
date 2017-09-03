var compass = require("./");

// Intercardinal Directions
test("Northeast", () => {
  expect(compass(45)).toBe("NE");
});

test("Southeast", () => {
  expect(compass(135)).toBe("SE");
});

test("Southwest", () => {
  expect(compass(225)).toBe("SW");
});

test("Northwest", () => {
  expect(compass(315)).toBe("NW");
});

// Even more divisions
test("North-Northeast", () => {
  expect(compass(22.5)).toBe("NNE");
});

test("East-Northeast", () => {
  expect(compass(67.5)).toBe("ENE");
});

test("East-Southeast", () => {
  expect(compass(112.5)).toBe("ESE");
});

test("South-Southeast", () => {
  expect(compass(157.5)).toBe("SSE");
});

test("South-Southwest", () => {
  expect(compass(202.5)).toBe("SSE");
});

test("West-Southwest", () => {
  expect(compass(247.5)).toBe("WSW");
});

test("West-Northwest", () => {
  expect(compass(292.5)).toBe("WNW");
});

test("North-Northwest", () => {
  expect(compass(337.5)).toBe("NNW");
});