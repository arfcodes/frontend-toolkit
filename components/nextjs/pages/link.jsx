/* eslint-disable jsx-a11y/anchor-is-valid */
/**
 * pages/link.js
 */
import Head from 'next/head';
import Link from '@components/Link';
import Container from '../includes/Container';

const PageLink = () => (
  <>
    <Head>
      <title>Link | Demo NextJs Components</title>
    </Head>
    <div className="d-link">
      <Container size="xl">
        <h1>Link</h1>
        <h2>Base</h2>
        <p>
          <Link href="/" passHref>
            <a>Click here to go Home</a>
          </Link>
        </p>
        <h2>With Custom Button</h2>
        <p>
          <Link href="/" passHref>
            <a className="button button--default button--primary button--sm">
              Click here
            </a>
          </Link>
        </p>
      </Container>
    </div>
  </>
);

export default PageLink;
