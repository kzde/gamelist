# Games Catalog

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

# Improvements for the future

## Typechecking

Migrate propTypes to `Flow`. Flow has better support for React, and its more strict. Also Flow allow us to have error hinting with some text editors. `Typescript` can be a good choice too, but i think with Flow, the migration will be less painful for the existed projet.
