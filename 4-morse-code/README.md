# 4: Morse Code
Sometimes vessels at sea need to communicate without radio. Using signal lamps, they can flash messages to each other if they have a way to _encode_ the messages in a way both ships understand. Many technologies have made Morse kinda obsolete, but the US Navy still teaches Morse, and we're going to use it to learn some JavaScript.

## Code Analysis
One function, `encode()`, taking a `string` `msg` and returning a different `string` made entirely of dots and dashes.

### What is this `require()` thing?
We want to keep our code clean. Sometimes that means separating our code into separate files. Node and JS give us the `require()` function to import code from other files. The string we give it, `"./morse"`, means "Go get the code in the `morse.js` file, located in the same folder as this file."

Let's go look at that file.

### `morse.js`
Oh good, more new syntax. What we have here is a [JavaScript Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object). Objects are simply matchings of keys and values. The keys on the left side are usually `strings`, whereas the values on the right can be anything at all: `string`s, `number`s, `Array`s, `function`s, even other `Object`s. In our case, they are currently empty strings. You'll have to create strings of the right combination of dots and dashes for each letter. This `Object` is exported, meaning made available, and then imported in `index.js` using `require()`.

### Iterating through `string`s
You can do it. There's a hint below.

## Objectives
### Primary Objective
Get the primary tests passing. These tests are just all-caps messages without weird characters.

### Bonus Objectives
Handle lower case and punctuation in `msg`. Should we ignore them, or what?

## Hints
* [Morse Code](https://en.wikipedia.org/wiki/Morse_code)
* [Iterating over a `string`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#Iterating_over_a_String)
* Don't forget we can add strings with the `+` operator. We can add to an existing string with `+=`.