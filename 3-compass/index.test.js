var compass = require("./");

// Cardinal Directions
test("Due North", () => {
  expect(compass(0)).toBe("N");
});

test("Due East", () => {
  expect(compass(90)).toBe("E");
});

test("Due South", () => {
  expect(compass(180)).toBe("S");
});

test("Due West", () => {
  expect(compass(270)).toBe("W");
});

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
  expect(compass(30)).toBe("NNE");
});

test("East-Northeast", () => {
  expect(compass(75)).toBe("ENE");
});

test("East-Southeast", () => {
  expect(compass(115)).toBe("ESE");
});

test("South-Southeast", () => {
  expect(compass(160)).toBe("SSE");
});

test("South-Southwest", () => {
  expect(compass(205)).toBe("SSE");
});

test("West-Southwest", () => {
  expect(compass(250)).toBe("WSW");
});

test("West-Northwest", () => {
  expect(compass(295)).toBe("WNW");
});

test("North-Northwest", () => {
  expect(compass(340)).toBe("NNW");
});

test("Bad Heading", () => {
  expect(compass(400)).toBe(null);
});