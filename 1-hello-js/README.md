# Hello, JS!

## JavaScript
We're using the JavaScript programming language in this course. JavaScript's natural habitat is in the web browser. It's the code that runs all the interactions on all the websites you visit.

But in recent years, JS has taken steps outside the web browser. It's an incredibly popular programming language, and with tool called [Node](https://nodejs.org), JavaScript can run on your computer just like any other language.

JavaScript files are just text with a `.js` file extension. When these files are fed to Node, Node interprets and executes the instructions inside.

## Visual Studio Code
We use Visual Studio Code as our text editor. VSCode has a lot of built-in tools that will help us write our code, as well as work with Git. There are also several extensions that might prove useful—especially the one called "Node Exec," which will automatically run our JS from VS Code.

## Our First Program
We teach programming the old-school way here at Mirman. That means beginning at the beginning, with "Hello, World!"

In VSCode, open the `index.js` file inside of the `1-hello-world` folder. This is where we'll write our first program.

### What is with these other files?
So you might notice some other files in this folder. In addition to `index.js`, you'll see:

* `README.md`: The file you're reading _right now_!
* `index.test.js`: The thing that tells you if your code works
* `package.json`: A file that Node uses to handle dependencies
* `package-lock.json`: Another such file. Don't touch either of these

### So, what do I do?

Once the file is open, open the built-in terminal in VSCode. Type `npm install` and press Enter. This will install the requisite files for our tests to run. Get used to doing this for each folder.

All of these folders are going to have tests to help you check if you got your code right. Our process for each exercise will be:

1. Run the tests (they will fail).
2. Read the results of the failed tests to understand how to make them pass.
3. Edit the code so that the tests pass.

So, let's run our tests. Using VSCode's built-in terminal, type `npm test`. This will run the tests described in `index.test.js`.

The test failed. Womp womp. The test output looks like this:

```
Expected value to be (using ===):
      "Hello, JS!"
    Received:
      "JS"
```

Read that carefully.

### This seems like a lot.
This framework is going to allow us to do a lot of complex work without too much effort. It seems like a lot when we get started, but getting used to this workflow is going to be worth it in the long run.

## Handing in work
Once you've gotten everything working, it's time to commit your code. When working with Git, it's not enough to just save the file. You have to tell Git about your changes. Luckily, VSCode makes that super easy. We'll cover this in class, but remember this procedure:

1. Add
2. Commit
3. Push

Every time. If you don't push your code, we assume it's not done.