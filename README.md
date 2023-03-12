## Installation

Make sure you have Node and NPM installed installed in your device
1. Run `npmi init --y`
2. Run `npm i @hapi/hapi` for framework
3. Run `npm i nodemon --save-dev`
4. Run `npm i eslint -- save-dev`
5. Run `npx eslint init` for initialization

## Usage
### for nodemon
after installing nodemon, open the package.json file, create a new npm runner script to run server.js using nodemon.

"scripts": {
    "start": "nodemon ./src/server.js",
},

### for eslint
After making the ESLint configuration, then we use ESLint to examine the JavaScript code in the project. But before that, we need to add the following npm runner inside the package.json file.

"scripts": {
  "lint": "eslint ./"
},
