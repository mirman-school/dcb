var fb = require("./");

test("Singleton Game", () => {
    expect(fb.game(1)).toEqual(expect.arrayContaining(["1"]));
});

test("Tiny Game", () => {
    const expected = [
        "1",
        "2",
        "Fizz!"
    ];
    expect(fb.game(3)).toEqual(expect.arrayContaining(expected));
});

test("Full Game", () => {
    const expected = [
        "1",
        "2",
        "Fizz!",
        "4",
        "Buzz!",
        "Fizz!",
        "7",
        "8",
        "Fizz!",
        "Buzz!",
        "11",
        "Fizz!",
        "13",
        "14",
        "FizzBuzz!"
    ];
    expect(fb.game(15)).toEqual(expect.arrayContaining(expected));
});