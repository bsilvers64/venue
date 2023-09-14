# The Venue

A dynamic Landing page for Concert infos

![Screenshot 2023-08-20 163337](https://github.com/bsilvers64/venue/assets/48654366/822831bd-3ed7-4215-8c47-0800ca2692d2)

## [Check out the website here](https://muddled-experience.surge.sh) 👈
Deployed using [Surge](https://surge.sh)

the project used the following external React components:

1. [React Awesome_Reveal](https://react-awesome-reveal.morello.dev)
2. [React Slick](https://react-slick.neostack.com)
3. [React Scroll](https://www.npmjs.com/package/react-scroll)

and [Material UI](https://mui.com)


## Available Scripts
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
App is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### A few side notes of what I learnt in this project:-

1) when i first learnt about data flow in react parent -> child (not vice versa) , was implementing this sidedrawer, and it called the the parent function through props which indirectly manipulated the the usestate variable in parent component. it was nice small idea.

2) key props for listitems in react.

3) enabling scrolling - used useEffect with empty dep array for function call only during component mounting, an event listener func,
which tracks scrolling. used a state variable here. track scroll level and when it goes down, we update state var through the setter method
and make the header transparent

4) why do i have to import React from 'react'; in every file ?
This was necessary because React components are defined using JSX syntax, which needs to be transformed into regular JavaScript code by the Babel compiler. The React module contained the functions needed to transform JSX into regular JavaScript, so it had to be imported in every file that contained JSX

5) react awesome reveal - animation effects that come to play when you move in/out of viewport

6) react slick slider, code -r filename, cd . > filename.ext
Template literals with backticks make creating strings with variables and expressions much easier and more readable.

7) useCallback hook, useMemo hook - compare the dependency array from the last time it was used to the current one, if its different, 
then rerun the function and store the value. these basically used for optimization purposes, to memoize/cache functions/values

8) cannot use hooks in loops or conditions. useEffect - to run a function after every render for a component, return value(function) from 
the useEffect runs on every unmount, empty dependency array means function runs onlly once on mounting.

9) "prop drilling" - In many cases, passing props can be an effective way to share data between different parts of your application. But passing props down a chain of multiple components to reach a specific component can make your code overly cumbersome.
we need to pass it down through all the intermediate components, even if those components don't actually use the data themselves. 
Prop drilling can make your code more difficult to read and maintain, and can also make it harder to refactor your components later on.
This is where the **Context API** comes in. With Context API, you can store data at the top level of the component tree and make it available to all other components that need it without passing props.
