/**
 * Demo App
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Menu from './Menu';
import Home from '../pages/Home';
import Button from '../pages/Button';
import styles from '../Styles.scss';

const App = () => (
  <BrowserRouter>
    <div className={styles.root}>
      <main className="main">
        <Menu />
        <div className={styles.content}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/button" component={Button} />
          </Switch>
        </div>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
