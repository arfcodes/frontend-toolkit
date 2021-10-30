/**
 * App
 */
import { lazy } from 'solid-js';
import { Router, useRoutes } from 'solid-app-router';

import styles from '../styles.scss';
import Menu from './Menu';

const routes = [
  {
    path: '/layout/container',
    component: lazy(() => import('../pages/Layout/Container')),
  },
  {
    path: '/layout/sidebar',
    component: lazy(() => import('../pages/Layout/Sidebar')),
  },
  {
    path: '/layout/cover',
    component: lazy(() => import('../pages/Layout/Cover')),
  },
  {
    path: '/layout/cluster',
    component: lazy(() => import('../pages/Layout/Cluster')),
  },
  {
    path: '/layout/switcher',
    component: lazy(() => import('../pages/Layout/Switcher')),
  },
  {
    path: '/layout/frame',
    component: lazy(() => import('../pages/Layout/Frame')),
  },
  {
    path: '/layout',
    component: lazy(() => import('../pages/Layout')),
  },
  {
    path: '/button/default',
    component: lazy(() => import('../pages/Button/Default')),
  },
  {
    path: '/button/style1',
    component: lazy(() => import('../pages/Button/Style1')),
  },
  {
    path: '/button',
    component: lazy(() => import('../pages/Button')),
  },
  {
    path: '/alert/default',
    component: lazy(() => import('../pages/Alert/Default')),
  },
  {
    path: '/alert',
    component: lazy(() => import('../pages/Alert')),
  },
  {
    path: '/title/style1',
    component: lazy(() => import('../pages/Title/Style1')),
  },
  {
    path: '/title/default',
    component: lazy(() => import('../pages/Title/Default')),
  },
  {
    path: '/title',
    component: lazy(() => import('../pages/Title')),
  },
  {
    path: '/section',
    component: lazy(() => import('../pages/Section')),
  },
  {
    path: '/',
    component: lazy(() => import('../pages/Home')),
  },
];

const Main = () => {
  const Routes = useRoutes(routes);

  return (
    <div className={styles.root}>
      <main className="d-main">
        <Menu />
        <div className={styles.content}>
          <Routes />
        </div>
      </main>
    </div>
  );
};

const App = () => (
  <Router>
    <Main />
  </Router>
);

export default App;
