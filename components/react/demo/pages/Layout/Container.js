/**
 * Demo Layout Container
 */
import React from 'react';
import { Normal } from '@demo/includes/SampleContent';
import { Container } from '@components/Layout';

const LayoutContainer = () => (
  <div className="d-layout">
    <Container>
      <h1>Container Demo</h1>
      <h2>&lt;Container&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="md" fluid="left">
      <h2>&lt;Container size=&quot;md&quot; fluid=&quot;left&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="md" fluid="right">
      <h2>&lt;Container size=&quot;md&quot; fluid=&quot;right&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xl">
      <h2>&lt;Container size=&quot;xl&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xl" fluid="left">
      <h2>&lt;Container size=&quot;xl&quot; fluid=&quot;left&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xl" fluid="right">
      <h2>&lt;Container size=&quot;xl&quot; fluid=&quot;right&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Container size=&quot;lg&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg" fluid="left">
      <h2>&lt;Container size=&quot;lg&quot; fluid=&quot;left&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg" fluid="right">
      <h2>&lt;Container size=&quot;lg&quot; fluid=&quot;right&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="sm">
      <h2>&lt;Container size=&quot;sm&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="sm" fluid="left">
      <h2>&lt;Container size=&quot;sm&quot; fluid=&quot;left&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="sm" fluid="right">
      <h2>&lt;Container size=&quot;sm&quot; fluid=&quot;right&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs">
      <h2>&lt;Container size=&quot;xs&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs" fluid="left">
      <h2>&lt;Container size=&quot;xs&quot; fluid=&quot;left&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs" fluid="right">
      <h2>&lt;Container size=&quot;xs&quot; fluid=&quot;right&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container fluid="both">
      <h2>&lt;Container fluid=&quot;both&quot;&gt;</h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container fluid="both" className="no-padding">
      <h2>
        &lt;Container fluid=&quot;both&quot;
        className=&quot;no-padding&quot;&gt;
      </h2>
      <div className="d-block bg--primary text--white">
        <Normal />
      </div>
    </Container>
    <br />
    <br />
    <br />
  </div>
);

export default LayoutContainer;
