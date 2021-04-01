# Employee Manager React Project

> Author: Wanlun Xue

**Description of App:** This app is the react version of employee manager. This app is deployed on firebase. This app allow new user to register an account and authenticate existing users to login. If the login is successful, user will be directed to dashboard page.

**What is used for:** It allows user sign up and login.

**How to use it:** User can choose either sign up or login. The login credentials are: username: wanlun@home.com, password: 123456ab

**How to install app:** type "npm install" in terminal

**How to run the app:** type "npm start" in terminal

**List of special tools:**

- This app uses node-sass which is a library that provides binding for Node.js to LibSass. The link for node-sass is (https://www.npmjs.com/package/node-sass)

- The project uses styled-components to tag template literals to style the components. More info about styled components: (https://styled-components.com/)

- Svgo is used optimize the svg files in icon folder. More info about svgo see (https://www.npmjs.com/package/svgo)

- This project is built and deployed on firebase. To learn more about firebase: (https://firebase.google.com/)

- This project is built using React, React is an open-source, front end, JavaScript library for building user interfaces or UI components. To learn more about React: (https://reactjs.org/)

**Link of working demo:** https://react-employee-manager-wanlun.web.app

**Development**.
To deploy this project, you need to type 'npm run build' at terminal, and then "firebase deploy"

# React Starter Kit

Starter kit is just an extension of the create react app project [Create React App](https://github.com/facebook/create-react-app).

### Includes The Following Modules

styled-components
svgo
@svgr/cli
node-sass
firebase
react-router-dom

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Firebase React Set Up

npm install -g firebase-tools
npm install firebase
npx firebase login
npx firebase init (firestore, hosting, storage)

npm run build
npx firebase deploy
