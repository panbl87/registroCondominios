# Condo Web Admin

**Nombre aún en construcción :sweat_smile:**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Este proyecto es la primera versión de un sistema de registro de datos para una comunidad ya sea de departamentos o casas; de manera que permita una correcta gestión de la comunidad.

Esta construído usando TypeScript usando un patron de arquitectura hexagonal en donde en el centro se ubican las entidades (datos de la comunidad) y se pretende que se maneje adaptadores a cada uno de los componentes que vayan a ser necesarios. Si bien se configuró una conexión hacia firebase, todavía no se puede almacenar información en la base de datos desde el contexto; pero la autenticación del sistema usa los servicios de autorización de firebase.

## Workspace Extension Recommendations (only Visual Studio Code)

To show the recommended extensions on Visual Studio Code, in the Extensions option write `@recommended:workspace`

![Recommended Extensions Screenshot](https://github.com/hatity/web-admin/blob/master/img/RecommendedExtensionsScreenshot.png)

## Available Scripts

In the project directory, you can run:

---

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

---

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

---

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

### `yarn run emulator`

This command will start the emulators for Cloud Functions, Cloud Firestore, Realtime Database and Firebase Hosting based on the products you initialized in your local project.

**Note: This command run the command `firebase emulators:start`**

For more information check the firebase [local emulator documentation](https://firebase.google.com/docs/functions/local-emulator).

---

### `yarn run analyze`

Analyze code bloat through source maps. Determines which file each byte in your minified code came from. It shows you a treemap visualization to help you debug where all the code is coming from.

For more information check the [source-map-explorer documentation](https://github.com/danvk/source-map-explorer#readme).
