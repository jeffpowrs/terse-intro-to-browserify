# A TERSE INTRODUCTION TO BROWSERIFY

## What does Browserify do?

Browserify allows you to use CommonJs modules in client-side Javascript.

Magic Module - magic.js
```javascript
module.exports = {
  do: function() {
    // Do mad magic
  }
};
```

Doing Magic Somewhere Else:
```javascript
var magic = require('magic');
// Magic was imported.

magic.do();
// Magic was done.
```
## Why use Browserify?

* It makes dependency managment in your client-side application _easy_.
* Having this easy approach to dependency managment will lead to more _modular_, _decoupled_ Code.
* You can share modules between the client-side and server-side application.
* Some other cool things.

## Let's get into it.

Install browserify globally to install the command-line tool.
_This requires node.js and npm._

`npm install browserify -g`

## The browserify command.

`browserify main.js -o bundle.js`

This command will recursively bundle main.js, and all of it's required modules into a single javascript file that can be included in your application.

Now run `npm install` to install the modules we will be using in our demos.

## Trying some examples.

### Example One

Here we will use the `util` Node-core module as well as the underscore.js node package, so make sure you have underscore installed.

`% npm install underscore -g`

`% cd ./ex1_underscore`

`% browserify main.js -o bundle.js`

Now open `ex1_underscore/index.html` in your browser, `% open index.html`.

You should see **some number** displayed in Green.

That is the result of an `_.reduce()`, using the node underscore package. The sum was printed to the screen using `util.format()`.

_PRETTY COOL! HUH?_

## Source Transforms

A transform is an additional process that is run on the modules that you `require()`. Each `requir()`ed file that browserify encounters during compilation will be _transformed_, if applicable, before the are added to the bundled javascript.

[List of transforms](https://github.com/substack/node-browserify/wiki/list-of-transforms)

Or you can also [write your own transforms.](https://github.com/substack/browserify-handbook#transforms)

### Example 2

In this example we will use the [hbsfy](https://github.com/epeli/node-hbsfy) transform. This will allow use to precompile our handlebars templates simply by requiring them in our source code.

`% cd ./ex2_hbsfy`

`% browserify main.js -o bundle.js`

Now open `ex2_hbsfy/index.html` in your browser, `% open index.html`.

If we look in `main.js`, we can see that the only change from example one is that we are now `require()`ing a handlebars template, which is precomplied (`Handlebars.precompile()`ed) automatically using our _handy-dandy_ `hsbfy` transform.

Our transforms are defined in `package.json`.

_WOW, REALLY COOL!_

## Shimming

Browserify can convert packages that do not follow the commonJs export format into requirable modules. To do this you we use Browserify's shim feature.

### Example Three

Here we will shim the jQuery library so that we can use retrieve it using a `require()` statement.

`% cd ./ex3_shim`

`% browserify main.js -o bundle.js`

Now open `ex3_shim/index.html` in your browser, `% open index.html`.

## Grunt

Let's integrate our `Browserify` build process into our Grunt workflow.

We can do this by using [grunt-broserify](https://github.com/jmreidy/grunt-browserify)

### Example Four

First we need to remove the transforms from our `package.json`. Otherwise our transforms will double up and we won't be able to use our templates.

Now lets compile our javascript with our new grunt task.

`% cd ./ex4_grunt`

`% grunt browserify:app`

Now open `ex3_shim/index.html` in your browser, `% open index.html`.

We can see that our code continues to work.

_AIN'T THAT SOMETHING!_



## Where to go from here.

Checkout some [Browserify Articles] (http://browserify.org/articles.html)
Read the [Browserify Handbook] (https://github.com/substack/browserify-handbook)
Try out [B.E.N.M. Boilerplate] (https://github.com/jkat98/benm)
Contribute to my [B.C.S.M. Boilerplate] (https://github.com/jeffpowrs/bcsm)
