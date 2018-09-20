# react-redux-themoviedb-search

A frontend application with React for looking for a list of movies and view their detail. It calls to the [The Movie Database API](https://developers.themoviedb.org/3).

On the first page we will see a list of the most popular movies and a search bar where we'll can enter the name of the movie to search. The search results will be shown on the same page in table format, showing the title, vote average, vote count, popularity, release date and genres. Besides, it will offer the ability to sort the list for every field (excepts genres).

Each result will navigate to a second page that will allows us to see the poster and additional information: overview, status, runtime, spoken languages, budget, production companies and production countries.

It is a responsive application and uses `@media queries`.

You can see the **demo here: http://react-redux-themoviedb-search.s3-website.eu-west-3.amazonaws.com**

## Who is this project for?

It is a good example of how using these tecnologies:

- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [React-Router](https://github.com/ReactTraining/react-router)
- React middlewares like: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-freeze](https://github.com/buunguyen/redux-freeze) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
- [Antd Design](https://ant.design/)
- [Jest](https://facebook.github.io/jest/): Obviously with snapshots

## How to install/configure the project?

### Installation

Just:

```
$ git clone https://github.com/aaronplanell/react-redux-themoviedb-search.git
$ cd react-redux-themoviedb-search
$ npm install
```

Obviously, the last line can be replaced by:

```
$ yarn install
```

## How to run the project?

For running in development mode just run:

```
$ npm start
```

Or:

```
$ yarn start
```

Automagically the browser will be open with the application.

## How create an optimized production build ?

For creating an optimized production build just run:

```
$ npm run build
```

Or:

```
$ yarn build
```

You will see a message like:

```
yarn run v1.9.4
$ REACT_APP_ENVIROMENT=development react-scripts build
Creating an optimized production build...
Compiled successfully.

  ...bla, bla, bla...

The build folder is ready to be deployed.
You may serve it with a static server:

  yarn global add serve
  serve -s build
```

## How to test the project?

Easy... Just.

```
npm run test
```

Or:

```
yarn test
```

You will find all the tests in differents tests folders. They check:

- Action creators
- Reducers
- Every component:
  - It renders
  - Its snapshot match
  - The events callbacks

It uses [Jest technology](https://facebook.github.io/jest/) :)

## Contributing

This project uses.

- [React](https://facebook.github.io/react/)
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [React-Router v4.0.0](https://github.com/ReactTraining/react-router)
- React middlewares like: [redux-thunk](https://github.com/gaearon/redux-thunk), [redux-logger](https://github.com/evgenyrodionov/redux-logger), [redux-freeze](https://github.com/buunguyen/redux-freeze) and [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store)
- [Antd Design](https://ant.design/)
- [Jest](https://facebook.github.io/jest/)

## Authors

- **Aaron Planell** ( [LinkedIn](https://www.linkedin.com/in/aaronplanell/) )

## License

GPL (GNU GENERAL PUBLIC LICENSE)
