# Games Catalog

# Demo

A demo is available here: https://games-catalog.herokuapp.com/

# Get started

## With Node locally

You can start the projet with yarn or npm

```
 // Intall
  yarn or npm install

 // Run
  yarn start-dev or npm run start-dev

 // Unit Test
  yarn test or npm run test

 // End to End Test  /!\ Application must be started
 yarn test-e2e

 //StoryBook
 yarn stroybook
```

# Technical choices

# React

Code Splitting with `React.lazy` and `React.Suspense`.
I decide to use these APIs to make route-based code splitting. In my App.js, every screens uses lazy import, and with suspense fallback props, I added a loader for waiting the promise.
same principle for the GameDetailsScreen, the NotFoundScreen will not be imported if the game details can be reached.

I didn't choose to use the redux, because I thought it is not neccessary. But if there are more feature need to be added, redux will be helpful.

This app manages internationalization, to achieve that I used `React.context`

# Test

## Unit test

I use `Jest Snapshot` to test UI component rendering, it's useful for stateless component, and `enzyme` for stateful component.

## End to end test

I use `Puppeteer` for the end to end test. Puppeteer support modern Javascript syntax, we can use async/await to deal with chains of async events. Puppeteer has headless mode, it makes running test faster.

## Styled Components

With `styled components`, i don't have to worry about the class name bug, like duplication, overlap etc. It generates unique class names, and it adds prefix automatically. It's simple to change the style of a component based on its props. Thanks to style written directly into component file, maintenance is painless.

## StoryBook

With `Storybook` and `styled components`, i can create a component with its data requirement, styles, and behaviour in the story file, and this component is isolate from the rest of my application.

## CSS Grid Layout

I use grid layout for manage the games catalog page, it makes responsive design more simple, but you have to Pay attention for the browser support.  

## Express

This page is hosted in heroku, so I add express and server.js file.

# Improvements for the future

- Migrate propTypes to `Flow` or `Typescript`. They can help me to do more flexible typechecking for entire projet, find error at compile time.

- DataProvider Component can be more intelligent if there are more different data need to be loaded. For exemple in the componentDidMount lifecycle, a fetch data function can be added, and a props who can tell the component where to fetch, so we can reuse this component to fetch some other information. And with suspense, suspend component rendering while data is being loaded.

- If redux need to be added for some other features, PlatformChoices component can be conncected to store. Thanks to redux, the selected platform information will not be lost when user navigate between games gatalog page and detail page.