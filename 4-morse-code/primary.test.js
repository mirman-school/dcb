var encode = require("./");

test("SOS", () => {
    expect(encode("SOS")).toBe("... --- ...");
});

test("NAUTILUS", () => {
    expect(encode("NAUTILUS")).toBe("-. .- ..- - .. .-.. ..- ...");
});

test("MAN OVERBOARD", () => {
    expect(encode("MAN OVERBOARD"))
        .toBe("-- .- -.   --- ...- . .-. -... --- .- .-. -..");
});

test("NCC 1701", () => {
    expect(encode("NCC 1701"))
        .toBe("-. -.-. -.-.   .---- --... ----- .----");
});