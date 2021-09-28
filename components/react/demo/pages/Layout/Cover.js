/**
 * Demo Layout Cover
 */
import React from 'react';
import { Short } from '@demo/includes/SampleContent';
import { Cover, Container } from '@components/Layout';

const LayoutCover = () => (
  <div className="d-layout">
    <Container fluid="both">
      <h1>Cover Demo</h1>
      <div className="d-block bg--primary text--white">
        <Short />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container fluid="both">
      <h2>&lt;Cover&gt;</h2>
      <Cover
        header={<strong>Cover Header</strong>}
        footer={<em>Cover Footer</em>}
        className="bg--primary text--white"
      >
        <Short />
      </Cover>
    </Container>
    <br />
    <br />
    <br />

    <Container fluid="both">
      <h2>&lt;Cover&gt; (main content only)</h2>
      <Cover className="bg--primary text--white">
        <Short />
      </Cover>
    </Container>
    <br />
    <br />
    <br />

    <Container fluid="both">
      <h2>&lt;Cover center&gt;</h2>
      <Cover
        center
        header={<strong>Cover Header</strong>}
        footer={<em>Cover Footer</em>}
        className="bg--primary text--white"
      >
        <Short />
      </Cover>
    </Container>
    <br />
    <br />
    <br />
  </div>
);

export default LayoutCover;
