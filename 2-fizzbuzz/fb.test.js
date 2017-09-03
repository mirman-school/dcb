var fb = require("./");

test("First Fizz", () => {
    expect(fb.fizzBuzz(3)).toBe("Fizz!");
});

test("First Buzz", () => {
    expect(fb.fizzBuzz(5)).toBe("Buzz!");
});

test("First FizzBuzz", () => {
    expect(fb.fizzBuzz(15)).toBe("FizzBuzz!");
});

test("Later Fizz", () => {
    expect(fb.fizzBuzz(9)).toBe("Fizz!");
});

test("Later Buzz", () => {
    expect(fb.fizzBuzz(20)).toBe("Buzz!");
});

test("Later FizzBuzz", () => {
    expect(fb.fizzBuzz(45)).toBe("FizzBuzz!");
});

test("Regular ol' Number", () => {
    expect(fb.fizzBuzz(7)).toBe("7");
});