# 3: Compass
Have you seen a compass? That's what we're doing here.

Nautical vessels use compass headings to navigate. Sometimes we use degrees and sometimes we use cardinal/intercardinal directions. We're going to write a simple function that converts a given compass heading to a named direction.

## Code Analysis
`compass()` will take a numerical heading and convert it into the appropriate compass point. We're going to use the 16-wind compass, meaning we divide the compass circle into 16 sections.

This looks like another good use for **conditional statements**, and it is. Except in this case, we need to structure our conditions in just such a way so that we only hit the correct test. We also have to compare the `heading` to a series of potential degree values to see if it falls inside that range. 

For example, if `heading` is less than 16.88 (I know, weird), then I know I'm going to call this North. In JS:

```
if (heading < 16.88) {
  return "North";
}
```

Putting that test first means I don't attempt any tests below it. If the test passes, I `return` the right value.

`return` stops the show. Once our function hits a `return` the function execution ends. So we don't need to worry about any code below it if we layer the conditions correctly. In fact, because of this feature of `return`, we don't even need to use `else if` or `else`! In this case, we just need the right order of `if`s, and one final `return` to handle a `heading` that doesn't pass _any_ test.

## Objectives
### Primary Objective
Complete the `compass()` function to convert the correct 4 headings to North, East, South, and West, respectively.

### Bonus Objectives
You'll notice in the tests, that we account for _all_ the named directions on the compass. Expand your `case`s to account for all them!

## Hints
* [Points of the Compass](https://en.wikipedia.org/wiki/Points_of_the_compass#32_cardinal_points)
* Your North test is going to look weird. Consider that:
  * North is any value from 0 - 16.88
  * North is any value from 343.13 to 359.99
  * We'll need to use Boolean operators to combine our tests
    * [AND](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_AND)
    * [OR](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators#Logical_OR)