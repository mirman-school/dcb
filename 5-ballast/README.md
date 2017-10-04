# 5: Ballast
Don't be alarmed by how different this exercise looks. It is no harder, and perhaps easier, than what you've done so far. But it's definitely better-looking.

In this exercise, we are going to build a simulation of buoyancy by completing the controls to a small game.

## Code Analysis
First off, there's a new folder structure than the exercises before. Let's examine:

### Folder Structure
* `./ (this folder`)
    * `README.md`: This file!
    * `index.js`: A little web server that will load our game. Not the code you need to complete, but it _is_ the code you'll need to execute with Node.
    * `package.json`: NPM dependencies. Remember to type `npm install` in the terminal before running anything.
    * `package-lock.json`: More NPM stuff.
    * `public/`: Another folder, where our browser stuff lives.
        * `index.html`: The web page our web browser will load. It contains links to all the JS that runs the game.
        * `assets/`: A folder of helper files for `index.html`.
            * `img/`: Images folder
                * `sub-sprite.png`: The image of our submersible in the game
            * `js/`: Where all the important JavaScript lives—including the code we need to work on!
                * `p5.min.js`: Minified version of [p5JS](https://p5js.org/), a simple graphics library for JavaScript.
                * `p5.play.js`: Extension to p5 that lets us make games and animations.
                * `main.js`: Finally, the code we need to complete.

### Why all the files?
This is a full web application, designed to run in the web browser. Websites/apps are provided by _other_ applications called **web servers**. That's the first `index.js`. Node will run that and create a little webserver out of your computer. More on that later. For now, let's focus on `index.js` in the root folder,`main.js` in the `public/assets/js` folder, and `public/index.html`.

### `index.js`
Don't forget to run `npm install` in this directory! You'll definitely need to before this code will work.

Okay so this `index.js` is not like any you've seen before. That's because this is code that runs a small web server on your computer. This is actually what Node was built to do! Feel free to look through the code, but don't change anything. When you're ready, either use the Node Exec extension in VS Code, or type `node ./` in the Terminal. You'll see

```bash
 Diving off port 3000
```

Our server is telling us that our computer is serving the app (our simulation). But instead of using the normal port for web traffic, which is port 80, it's using a special one: 3000. 

To access the running app, in your web browser's address bar, type:

```
localhost:3000
```

That should bring up the simulation. Now, nothing will happen yet, because you haven't written the code! Still, you should see our plucky submersible, some instructions, and blue ocean/sky.

### `public/index.html`
You don't have to edit this file, but I want you to look at its structure to see how the JavaScript is connected to the HTML page. Do you see the `<script>` tags? In addition to the `main.js` file, you see references to `p5.min.js` and `p5.play.js`. [p5](https://p5js.org) is a simple library for making simulations, animations, and games. 

### `public/assets/js/main.js`
In this file is all the code we need to get our simulation rolling. There's a lot going on in there, but a great deal of it is pre-built for you. Let's break it down.

#### Lines 4-13: Global variables
Sometimes we need to declare a bunch of variables up front so we can use them later in our program.

#### `preload()`, `setup()`, and `draw()`
P5 uses these functions to conduct its business. `preload()` makes sure our sub image loads in time for the app to use it. `setup()` creates the "Sprites" (interactive images) and values for variables that we'll need. `draw()` runs continuously, about once per millisecond, give or take computing time for complex tasks. 

So in lines 34-43, you see the instructions to actually create the sky and ocean. We make sure the rectangles are big enough to fill the whole window, regardless of the browser window's size.

On lines 46-48, we create the instruction labels using a custom function defined on line 27, `ballastLabel()` and the built-in p5 function `text()`.

Line 50 is where we set the velocity of the submersible. The single `0` sets both `x` and `y` velocities to 0.

Lines 53-57 handle buoyancy, and make sure the sea floor and surface actually work. Do read and try to understand these lines, but don't mess with them unless you want some hilarious results. 

Now we're into the good stuff. The rest of the code _you_ need to implement. There are conditionals for ballast circumstances and conditionals for key controls. You need to fill in the details to make the simulation work.

## Objectives

### Primary Objective
Get this simulation running correctly. You shouldn't have to look up anything outside `main.js` to understand the code. As you add instructions and save `main.js`, reload the simulation in your web browser to see the results.

#### Debugging
Make sure the Chrome Inspector is open to show JS errors in your simulation. This is an invaluable tool to help troubleshoot.










