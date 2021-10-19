/* eslint-disable react/prop-types */
/**
 * pages/_app.js
 */
import Layout from '../includes/Layout';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const rootStyles = Component.rootStyles || null;
  const getLayout =
    Component.getLayout ||
    ((page) => <Layout className={rootStyles}>{page}</Layout>);

  return <>{getLayout(<Component {...pageProps} />)}</>;
}

export default MyApp;
