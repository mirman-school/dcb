# 2: FizzBuzz
Ah, FizzBuzz. Here's another classic of computer programming. In this exercise, you're going to reproduce the math game you've all (probably played). But in case you haven't, here are the rules.

## Rules of FizzBuzz
1. Go around the room, each person counting off. I say "1," then you say "2," and so on.
2. If the number is divisible by `3`, say **"Fizz"** instead.
3. If the number is divisible by `5`, say **"Buzz"** instead.
4. If the number is divisible by both `3` _and_ `5`, say **"FizzBuzz"** instead.

So an example game might go:

```
One
Two
Fizz
Four
Buzz
Fizz
Seven
Eight
Fizz
Buzz
Eleven
Fizz
Thirteen
Fourteen
FizzBuzz
```

## The Code
Let's crack open `index.js` and see what we have.

Whoah, two functions this time! Don't forget, **try not to look at everything at once. Take things one small piece at a time.** 

One function is called `fizzBuzz()`. That weird capitalization is called "Camel case" (or `camelCase`), and it's a convention used by JS coders when a function or variable name is longer than one word.

The other function is `game()`. Let's look at `fizzBuzz()` first.

### `fizzBuzz()`
So the comments let us know what's going on. It's good practice to write comments where necessary so anyone reading your code can understand what each piece does. In JS, `//` at the start of a line makes a comment, which is ignored when your code is interpreted.

In the function definition, we can see that `fizzBuzz()` takes a single argument, `n`. And we know from the comments that `n` is a number—an integer, if we're being precise. But the comments also say we're supposed to return a string.

What?

#### Strings
Strings are what we call text-based information in programming. `"Hello, JS!"` was a string. You can tell because of the quotes. These don't behave like numbers, and we need strings for this program. Why? Think about our possible results of `fizzBuzz()`:

* `fizzBuzz(2)` → 2
* `fizzBuzz(3)` → Fizz!
* `fizzBuzz(5)` → Buzz!
* `fizzBuzz(15)` → FizzBuzz!

All of these need to be interpreted the same way, so we need a **data type** that all of these possible values can be. That's a string, not a number.

If you look up at the rules of FizzBuzz, you'll see a lot of the word "if." This word is _so important_. It tells us that the logic of our game has branches, like a tree. Or offramps, like a freeway. Or some other simile you enjoy.

#### Conditional Statemets
**Conditionals** allow the logic of our code to respond to different circumstances. Remember `greet()` from the last exercise? We could use a conditional to respond to special names. Something like:

```
function greet(name) {
    if (name === "Methuseleh") {
        return "You are so old, dude!";
    }
    ...
}
```

The `if` needs a **test** inside the parentheses right after it. That test is either `true` or `false`. If the statement is `true`, the code inside the curly braces is run. Otherwise, the whole thing is skipped and we move on.

Sometimes we have multiple conditions to handle. Consider the following function:

```
function isMammal(species) {
    if (species === "dolphin") {
        return true;
    } else if (species === "otter") {
        return true;
    } else if (speicies === "whale") {
        return true;
    } else {
        return false;
    }
}
```

Okay, I realize I didn't account for _every_ marine mammal, but you get the picture. These are called **conditional trees**. They follow these rules:

1. Start with an `if` statement.
2. With more than 2 possibilities, continue with an `else if` and another tests.
3. Continue with `else if`s until the last possible condition. Then use `else`. `else` doesn't need a test.

**YOU NEED A CONDITIONAL TREE TO WRITE `fizzBuzz()`!**

### `game()`
All `game()` does is take a number `turns` and saves the results of each turn of a FizzBuzz game. Simple, but we see two new things. An `Array` and a `for` loop.

#### Arrays
`Array`s are just another **data type**, like `strings` and `numbers`. `Array` is useful when we need many values in the same container. In this case, we're saving every turn in an `Array` called `results`.

To run through the game, we need to count from `1` to the number of `turns` provided to the function. For each turn, we need to do the same thing: attach the result to our `Array`. Because we do the same thing a known number of times, we write this as a `for` loop.

#### `for` Loops
Loops repeat the code inside of them. One of two kinds of loops in JavaScript, `for` loops are great **when we know how many times we are going to repeat our code**. Let's break down the syntax:

```
for (var i=1; i <= turns; i++) {

}
```
First, we use the keyword `for` to tell JS a loop is comin'. Then, in parens, three statements separated by semicolons, just like we put at the end of our lines. 

Inside the parens, we start with a **variable declaration** with the keyword `var`. This variable is often called `i` in `for` loops, but could be called anything. This variable is known as the `iterator`, and it keeps track of how many times the loop has run. Think of it as counting on your fingers. 

Because we start on round 1, we initialize `i` to the value of `1`. But most `for` loops will start at 0.

Then, a condition: `i <= turns;`. Here we set up the condition under which the loop should continue. The second this statement is `false`, the loop will stop.

Finally, the **incrementor**. `i++` means that at the end of every pass through the loop, we're going to automatically add `1` to `i`. Without this statement, the loop would run forever.

#### Modifying `Array`s
You see in the loop that we are using the `push()` function attached to `results`. `push()` is a function attached to all `Array`s that allows us to insert new values. We put the new value inside the parens, and the `Array` now has that thing inside of it.

As the code stands, we are not inserting the right thing. To do that, we need to use the other function we wrote.

## Objectives
### Primary Objective
Get both `fizzBuzz()` and `game()` running and passing all tests.

### Bonus Objective.
It would be kind of fun to see the game run rather than just pass the tests. So, in `index.js`, modify either `game()` or `fizzBuzz()` so that calling the function results in printing out the game results.


## Hints
* [Remainder Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())
* [`Array.push()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push?v=b)
* We print things out using `console.log()`