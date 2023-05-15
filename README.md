# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## `Books Page`
Go to  `src/components/Books.js` search for array `const books = [` 
in that insert object looking like this
```
{
id: "b1", // <-- Important! should be any unique id 
cover: B1, // <-- imported image of the book cover <-- how to do this is below
url: "https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow", // <-- url of the book page
title: "Thinking, Fast and Slow", 
author: "Daniel Kahneman",
desc: // <-- description
"This book is my bible in psychology. How we think and why? Nobel Laureate Daniel Kahneman, you changed the way I think both in personal and professional domains",
}
```
#### how to import images like `B1`
In `Books.js` at around line 15 you will see something like `import B1 from "../assets/b1.jpg";`
Basically that is importing image b1.jpg from directory `/src/assets/`

To import a image like `temp.jpg` first drag drop it in directory `/src/assets` then alongside other image imports add
`import TEMP from "../assets/temp.jpg";` Now you can use `TEMP` just like `B1` 

*** rename accordingly ***

## `Writings Page`
Search `const writings = [` rest all similar to Ideas page, only difference is there's no author 

## `Ideas Page`
This is little different from other components.\
Search for `const ideas = [` and add a object like
```
{
id: "i0", // <-- unique id
src: "GKOOjWNMFsE", <-- youtube url id 
url: "https://de.slideshare.net/execamit/olx-auto-note-4", <-- url for onClick
cover: I6, <-- cover image
title: "Some title",
desc: "some desc",
},
```
It can either be used for youtube url or as a simple image component
1. In case of youtube url like `https://www.youtube.com/watch?v=GKOOjWNMFsE` copy id `GKOOjWNMFsE` and put it in `src` key, and remove `url` and `cover` key
2. In case of image, drag drop image in assets and import, put a `url` link (if available) and the imported image in `cover` key, also remove `src` key, `src` is only for youtube videos
















