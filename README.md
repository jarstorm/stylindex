This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Description
Coding chalenge for Stylindex company.

The project it's an easy React app to fecth a GraphQL endpoint.

You could check my production build here: https://trusting-noether-91f454.netlify.com/

### Coding decisions
It took me some time to start with Apollo client because I used to work with React, Redux and REST endpoint.

I didn't use Redux here because I thnk it's not needed. However if you need to store your login credential for example you probably need it.


### `yarn install`
You should run this command in order to download every library needed for development.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

I made some testing using Jest and Enzyme (note that only Pokemon.js component it's tested because the rest of the app will be exactly the same)

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
