# The Venue: Concert Info Landing Page

![Screenshot 2023-08-20 163337](https://github.com/bsilvers64/venue/assets/48654366/822831bd-3ed7-4215-8c47-0800ca2692d2)

## 🌐 **Check out the website [here](https://muddled-experience.surge.sh) 🚀**
Deployed using [Surge](https://surge.sh)

## Overview

Welcome to "The Venue," a dynamic landing page designed to provide real-time information about concerts. This project is powered by Create React App and incorporates these 
external React components:

1. [React Awesome_Reveal](https://react-awesome-reveal.morello.dev)
2. [React Slick](https://react-slick.neostack.com)
3. [React Scroll](https://www.npmjs.com/package/react-scroll)

and [Material UI](https://mui.com)

## Key Learnings

1. **Data Flow in React**
   - when i first learnt about data flow in react parent -> child (not vice versa) , was implementing this sidedrawer, and it called the the parent function through props which indirectly manipulated the       the usestate variable in parent component. it was nice small idea.

2. **Enabling Scrolling**
   - used useEffect with empty dep array for function call only during component mounting, an event listener func,
     which tracks scrolling. used a state variable here. track scroll level and when it goes down, we update state var through the setter method
     and make the header transparent

3. **why do i have to import React from 'react'; in every file ?**
   - This was necessary because React components are defined using JSX syntax, which needs to be transformed into regular JavaScript code by the Babel compiler. The React module contained the functions         needed to transform JSX into regular JavaScript, so it had to be imported in every file that contained JSX

4. **React Awesome Reveal and React Slick Slider**
   - Implementing animation effects with React Awesome Reveal and creating a responsive slider with React Slick enhances user experience.

5. **useCallback and useMemo Hooks**
   - Understanding and implementing the useCallback and useMemo hooks for optimization purposes. These hooks help memoize/cache functions/values by comparing the dependency array from the last time it was      used to the current one.

6. **Context API vs. Prop Drilling**
   - In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can      make your code overly cumbersome.
     we need to pass it down through all the intermediate components, even if those components don't actually use the data themselves. 
     Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.
     This is where the **Context API** comes in. With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing           props.

7. **Key props for list-items in React**
   - In React, when rendering a list of items using a component like map or forEach, it's important to assign a unique key prop to each item. The key prop helps React identify which items have changed,         been added, or been removed. It's a performance optimization and is also required by React to maintain the correct component state.
  
8. **useEffect hook**
   - you can use the useEffect hook to run a function after every render. The function passed to useEffect will run after the initial render and then after every subsequent render.
   - If your useEffect function returns a cleanup function, that cleanup function will run when the component is unmounted. This is useful for cleanup tasks like unsubscribing from subscriptions or    
     clearing intervals.
   - When the dependency array is empty ([]), the function provided to useEffect will run only once after the initial render, effectively behaving like componentDidMount in class components.
  
       
**Feel free to explore the code, experiment with different components, and adapt "The Venue" project to your specific needs. Happy coding!**

### Available Scripts

This project was bootstrapped with Create React App. In the project directory, you can run:

- **npm start:** Runs the app in the development mode. Open http://localhost:3000 to view it in your browser. The page will reload when you make changes, and you can check for lint errors in the console.
  
- **npm test:** Launches the test runner in interactive watch mode. Refer to the section about running tests for more information.
  
- **npm run build:** Builds the app for production in the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.

