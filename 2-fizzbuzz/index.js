function fizzBuzz(n) {
    // Takes a number n and returns the correct FizzBuzz value
    // All values returned should be strings
    return n;
}

function game(turns) {
    // An Array into which we'll put the result of our game
    var results = [];
    
    // A loop that attaches the correct value to results
    for (var i=1; i <= turns; i++) {
        // turnResult should not just be i; it needs to use fizzBuzz()
        var turnResult = i;
        results.push(turnResult);
    }

    return results;
}

// We need this line for testing
module.exports = {fizzBuzz, game};