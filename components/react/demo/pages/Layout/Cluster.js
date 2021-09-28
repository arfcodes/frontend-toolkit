/**
 * Demo Layout Cluster
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Short } from '@demo/includes/SampleContent';
import { Cluster, Container } from '@components/Layout';

const Nav = ({ children }) => (
  <li>
    <div className="d-block bg--primary text--white">
      <strong>{children}</strong>
    </div>
  </li>
);

Nav.propTypes = {
  children: PropTypes.string.isRequired,
};

const LayoutCluster = () => (
  <div className="d-layout">
    <Container>
      <h1>Cluster Demo</h1>
      <div className="d-block bg--primary text--white">
        <Short />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container>
      <h2>&lt;Cluster&gt;</h2>
      <Cluster>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <Nav>Home</Nav>
          <Nav>About Us</Nav>
          <Nav>Service</Nav>
          <Nav>Products</Nav>
          <Nav>Careers</Nav>
          <Nav>News</Nav>
          <Nav>Contact Us</Nav>
        </ul>
      </Cluster>
    </Container>
    <br />
    <br />
    <br />

    <Container>
      <h2>&lt;Cluster noSpace&gt;</h2>
      <Cluster noSpace>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <Nav>Home</Nav>
          <Nav>About Us</Nav>
          <Nav>Service</Nav>
          <Nav>Products</Nav>
          <Nav>Careers</Nav>
          <Nav>News</Nav>
          <Nav>Contact Us</Nav>
        </ul>
      </Cluster>
    </Container>
  </div>
);

export default LayoutCluster;
