# A React Contact List

![](https://media.giphy.com/media/63I6FXZTXks2A/giphy.gif)

## Overview
Let's create a contact list using `Class` components and mapping. We'll be practicing with a large set of data to get comfortable with mapping data, passing it through props, and rendering it within a nested component.

## Objectives
- Import data into the React component file tree
- Pass data through props into nested components
- Render unique components with unique `key`s when `mapping` through the data passed through `props`


## What You'll Be Building
Here is what the finished application will look like:

![](https://media.giphy.com/media/YleV4Tht95MPtY01nW/giphy.gif)

## Getting Started
- `Fork` and `clone` this repository
- `npm i` to install dependencies

## Instructions

### 1. You have a list of contacts hard coded in `/src/data/contact.json`
- Find this list of contacts in your React App's file tree
- Notice what data types are within `contact.json`

### 2. You need to bring this data into your `App.js`
- Import the contacts data into `App.js`
- ```js
  import contacts from './data/contact.json'
  ```
- `console.log` contacts in `App.js` above its return to make sure that you've imported the data correctly

### 3. You will have to create a new component to hold each individual contact
- Create a `components` folder inside of your `src` folder
- Inside `components` create a new file for your component called `Contact.js`
- You will need to import this component in `App.js`
- Think about what `props` you might want to pass into the `Contact` component from `App.js`
- A simple idea for what you might want to create within the return of the render method of this component:
  ```jsx
  <div className="contact">
    <div>
      <img alt="" src="" />
    </div>
    <div>
      <h2></h2>
      <p></p>
      <p></p>
    </div>
  </div>
   ```

### 4. In App.js use `.map()` to pass data into the Contact component and pass props into it before it is rendered
- Think about what array you might want to map in order to pass data into the `Contact` component
- Give the `Contact` component data by giving it props, along with a key for each index of the array you are mapping from
- Render this `.map()` by calling it within the return of the render method of App.js

### 5. At the very least for styling your app should be in a list of contacts down the center of the page with the photo in a circle on the left and the information on the right
- You may want to target the .contact class in your App.css and give it a grid with columns
- `border-radius: 50%;` to make something a circle

###  **Bonus!!!** 
- If you want to go above and beyond create the layout shown in the GIF on this page that looks like a phone screen and only shows a few contacts at a time

#### Have Fun!!!


## Recap
In this lab, we practiced mapping over a large set of data after importing it and rendering unique components for each contact in the list. When mapping over data and rendering it, it's important to `console.log` the data first to see what sort of props we'll need to create in our components.

## Resources
- [React Mapping Components Lesson](https://github.com/SEI-R-4-26/u2_lesson_react_mapping_components)
- [Components and Props (React Docs)](https://reactjs.org/docs/components-and-props.html#function-and-class-components)
- [Embedding .map() in JSX (React Docs)](https://reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx)


