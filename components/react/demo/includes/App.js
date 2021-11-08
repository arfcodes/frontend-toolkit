/**
 * Demo App
 */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

import Button from '../pages/Button';
import ButtonDefault from '../pages/Button/Default';
import ButtonStyle1 from '../pages/Button/Style1';

import Alert from '../pages/Alert';
import AlertDefault from '../pages/Alert/Default';

import Layout from '../pages/Layout';
import LayoutContainer from '../pages/Layout/Container';
import LayoutSidebar from '../pages/Layout/Sidebar';
import LayoutCover from '../pages/Layout/Cover';
import LayoutCluster from '../pages/Layout/Cluster';
import LayoutSwitcher from '../pages/Layout/Switcher';
import LayoutFrame from '../pages/Layout/Frame';
import LayoutGrid from '../pages/Layout/Grid';

import Section from '../pages/Section';

import Cta from '../pages/Cta';

import Title from '../pages/Title';
import TitleDefault from '../pages/Title/Default';
import TitleStyle1 from '../pages/Title/Style1';

import styles from '../Styles.scss';
import Menu from './Menu';

const App = () => (
  <BrowserRouter>
    <div className={styles.root}>
      <main className="d-main">
        <Menu />
        <div className={styles.content}>
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/button" component={Button} exact />
            <Route path="/button/default" component={ButtonDefault} />
            <Route path="/button/style1" component={ButtonStyle1} />

            <Route path="/alert" component={Alert} exact />
            <Route path="/alert/default" component={AlertDefault} />

            <Route path="/layout" component={Layout} exact />
            <Route path="/layout/container" component={LayoutContainer} />
            <Route path="/layout/sidebar" component={LayoutSidebar} />
            <Route path="/layout/cover" component={LayoutCover} />
            <Route path="/layout/cluster" component={LayoutCluster} />
            <Route path="/layout/switcher" component={LayoutSwitcher} />
            <Route path="/layout/frame" component={LayoutFrame} />
            <Route path="/layout/grid" component={LayoutGrid} />

            <Route path="/section" component={Section} />
            <Route path="/cta" component={Cta} />

            <Route path="/title" component={Title} exact />
            <Route path="/title/default" component={TitleDefault} />
            <Route path="/title/style1" component={TitleStyle1} />
          </Switch>
        </div>
      </main>
    </div>
  </BrowserRouter>
);

export default App;
