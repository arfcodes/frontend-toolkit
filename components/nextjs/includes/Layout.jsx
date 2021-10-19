/**
 * Demo Layout
 */
import PropTypes from 'prop-types';
import styles from './App.module.scss';
import Menu from './Menu';

const Layout = ({ children }) => (
  <div className={styles.root}>
    <main className="d-main">
      <Menu />
      <div className={styles.content}>
        <div className={styles.contentMain}>{children}</div>
      </div>
    </main>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
