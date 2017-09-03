var encode = require("./");

test("sos", () => {
    expect(encode("sos")).toBe("... --- ...");
});

test("NaUtIlUs", () => {
    expect(encode("NaUtIlUs")).toBe("-. .- ..- - .. .-.. ..- ...");
});

test("man OVERBOARD!", () => {
    expect(encode("man OVERBOARD!"))
        .toBe("-- .- -.   --- ...- . .-. -... --- .- .-. -..");
});

test("ncc-1701", () => {
    expect(encode("ncc-1701"))
        .toBe("-. -.-. -.-.   .---- --... ----- .----");
});