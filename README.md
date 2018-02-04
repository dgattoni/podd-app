# Pie of The Day App

## Dependencies

* `node v8.8.0`
* `npm v5.4.2`
* `yarn v1.3.2`

## Install and Running

### ENV vars

1. Create a .env file at the root level.
2. Set an environment variable `NODE_PATH=src/`


### Development

1. yarn install
2. yarn start
3. navigate to http://localhost:3000 in your browser of choice.


### Tools and libraries

1. SCSS preprocessor: Sass 3 introduces a new syntax known as `SCSS` which is fully compatible with the syntax of CSS. The following benefits improves the UI styling and future maintenance on this project:
  - Nested syntax
  - Ability to define variables
  - Ability to define mixins
  - Mathematical functions
  - Operational functions (such as “lighten” and “darken”)

2. Redux:
  - Dependency added to have a Single source of truth, The state of this whole application is stored in an object tree within a single store, that makes it easier to debug or inspect.
  - more about the 3 Principles of Redux: https://redux.js.org/docs/introduction/ThreePrinciples.html

3. Create-React-App on its version with `eject`:
  - This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
  - I decided to `yarn eject` this boilerplate in order to have more control on webpack configuration such as plugin enhancements for SCSS preprocessor.

4. Fonts/SVG:  
  -  Added the svg version in order to support scalability without changing the image quality. Credits to `Pie by Alex Muravev from the Noun Project`: https://thenounproject.com/search/?q=pie&i=1016960#
  - Added in order to improve readability of texts on Mobile/Desktop screens. Google Fonts, Family `Inconsolata`  https://fonts.google.com/specimen/Inconsolata?selection.family=Inconsolata


### Todo:

1. Add unit/integration tests with jest. (pending)
2. Fix pagination issue: once it reaches last page it should hide next-button. (pending)
3. Add optional Feature: Search against the pie name (enhancement)
4. Add optional Feature: Filter by price (ascending/descending) (enhancement)
5. Add Typechecking With PropTypes (enhancement)
6. Refactoring Grid as high-order-component to be reused on displaying Stores and Pies entities (enhancement)
7. Refactoring for better handling on API error responses (enhancement)
