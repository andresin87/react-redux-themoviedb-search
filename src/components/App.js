import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import styles from './App.module.css';

import configureStore from '../config/store';
import Search from './Search/Search';
import Detail from './Detail/Detail';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className={styles['App']}>
          <header className={styles['App-header']}>
            <h1 className={styles['App-title']}>The Movie Database API</h1>
          </header>
          <div className={styles['App-body']}>
            <Router>
              <div>
                <Route exact path="/" component={Search} />
                <Route path="/detail" component={Detail} />
              </div>
            </Router>
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
