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

* _Easy_ dependency managment in your client-side application.
* You can write Modular, Decoupled Code.
* Some other cool things!

## Let's get into it.

Install browserify globally to install the command-line tool.
_This requires node.js and npm._

`npm install browserify -g`

## The browserify command.

`browserify main.js -o bundle.js`

This command will bundle main.js, and all it's required modules into a single javascript file that can be included in your application.

Now let's run `npm install` to install the modules we will be using in our demos.

## Trying some examples.

### Example One

`cd ./ex1_underscore`

`browserify main.js -o bundle.js`

`open index.html`

Now open `ex1_underscore/index.html` in your browser.

You should see **some number** displayed in Green.

That is the result of an `_.reduce()`, using the node underscore package. The sum was printed to the screen using `util.format()`.

_PRETTY COOL! HUH?_

## Source Transforms

A transform is an additional process that is run while your files are being compilied. Each `required` file that browserify encounters during compilation will be _transformed_, if applicable, before compilation continues.

[List of transforms](https://github.com/substack/node-browserify/wiki/list-of-transforms)

Browserify allows you easily [write your own transforms.](https://github.com/substack/browserify-handbook#transforms)

### Example 2

In this example we will use the [hbsfy](https://github.com/epeli/node-hbsfy) transform. This will allow use to precompile our handlebars templates simply by requiring them in our source code.

`cd ./ex1_underscore`

`browserify main.js -o bundle.js`

`open index.html`

As you can see in `main.js` the only change from example one is that we are now requiring a handlebars template, which is precomplied automatically using our handy-dandy `hsbfy` transform.

Our transforms is defined in `package.json`.

## Shimming

Browserify can convert packages that are not written in commonjs export format into requirable modules.

### Example Three
https://gist.github.com/defunctzombie/4339901

## Grunt

### Example Four


## Browserify In Your Grunt Workflow

## Where to go from here.

[Additional Reading] (http://browserify.org/articles.html)
