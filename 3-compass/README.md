# 3: Compass
Have you seen a compass? That's what we're doing here.

Nautical vessels use compass headings to navigate. Sometimes we use degrees and sometimes we use cardinal/intercardinal directions. We're going to write a simple function that converts a given compass heading to a named direction.

## What do you do with a lotta conditions?
In our last exercise, we learned about basic conditional statements. Here, we're going to have so many conditions that a regular `if`/`else` tree would get a little unwieldy. Luckily, we have another tool for just such an occasion: the `switch`.

### Switch it up
When we have a lot of known possible values for something, the `switch` statement allows us to create a series of `case`s. 

The [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch) give a good overview, but here's the brief version:

```
switch (expression) {
  case value1:
    //Statements executed when the result of expression matches value1
    [break;]
  case value2:
    //Statements executed when the result of expression matches value2
    [break;]
  ...
  case valueN:
    //Statements executed when the result of expression matches valueN
    [break;]
  [default:
    //Statements executed when none of the values match the value of the expression
    [break;]]
}
```
So we write a `case` for each value we know is a possibility. That `default` you see is to handle any unforeseen values. 

### Why not use `if`/`else`?
Well you can, but as you'll see below, that might be messy.

## Objectives

### Primary Objective
Complete the `compass()` function to convert the correct 4 headings to North, East, South, and West, respectively.

### Bonus Objectives
You'll notice in the tests, that we account for _all_ the named directions on the compass. Expand your `case`s to account for all them!