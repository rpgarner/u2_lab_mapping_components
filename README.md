# Functional Component Contact List

### Let's create a contact list using functional components and mapping.

![](https://media.giphy.com/media/63I6FXZTXks2A/giphy.gif)


Here is what the finished application will look like:

![](https://media.giphy.com/media/YleV4Tht95MPtY01nW/giphy.gif)


`Fork` and `clone` this repository
`npm i` to install dependencies

## Steps

### 1. You have a list of contacts hard coded in `/src/data/contact.json`
- Find this list of contacts in your React App's file tree
- Notice what data types are within `contact.js`

### 2. You need to bring this data into your `App.js`
- Import the contacts data into `App.js`
- ```js
  import contacts from './data/contact.json'
  ```
- `console.log` contacts in `App.js` to make sure that you've imported the data correctly

### 3. You will have to create a new component to hold each individual contact
- Create a `components` folder inside of your `src` folder
- Inside `components` create a new file for your component called `Contact.js`
- You will need to import this component in `App.js`
- Think about what props you might want to pass into the `Contact` component from `App.js`
- A simple idea for what you might want to create within the return of the render method of this component:
  ```html
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
- Render this map() by calling it within the return of the render method of App.js

### 5. At the very least for styling your app should be in a list of contacts down the center of the page with the photo in a circle on the left and the information on the right
- You may want to target the .contact class in your App.css and give it a grid with columns
- `border-radius: 50%;` to make something a circle

###  **Bonus!!!** 
- If you want to go above and beyond create the layout shown in the GIF on this page that looks like a phone screen and only shows a few contacts at a time

###  **Ultra Bonus!!!** 
- Recreate the mockup shown below in React and have the contacts render on the screen!


#### Have Fun!!!


![](https://raw.git.generalassemb.ly/ga-wdi-exercises/cell_phone_html_css/master/mock.png)
