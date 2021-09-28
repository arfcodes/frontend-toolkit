/**
 * Demo Layout Switcher
 */
import React from 'react';
import { Short } from '@demo/includes/SampleContent';
import { Switcher, Container } from '@components/Layout';

const SwitcherColumn = () => (
  <div className="switcher__column">
    <div className="d-block bg--primary text--white">
      <Short />
    </div>
  </div>
);

const LayoutSwitcher = () => (
  <div className="d-layout">
    <Container size="lg">
      <h1>Switcher Demo</h1>
      <div className="d-block bg--primary text--white">
        <Short />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Switcher&gt;</h2>
      <Switcher>
        <SwitcherColumn />
        <SwitcherColumn />
        <SwitcherColumn />
      </Switcher>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Switcher columnSize=&quot;50&quot;&gt;</h2>
      <Switcher columnSize="50">
        <SwitcherColumn />
        <SwitcherColumn />
      </Switcher>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Switcher columnSize=&quot;25&quot;&gt;</h2>
      <Switcher columnSize="25">
        <SwitcherColumn />
        <SwitcherColumn />
        <SwitcherColumn />
        <SwitcherColumn />
      </Switcher>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Switcher noSpace&gt;</h2>
      <Switcher noSpace>
        <SwitcherColumn />
        <SwitcherColumn />
        <SwitcherColumn />
      </Switcher>
    </Container>
    <br />
    <br />
    <br />

    <Container size="lg">
      <h2>&lt;Switcher noSpaceX&gt;</h2>
      <Switcher noSpaceX>
        <SwitcherColumn />
        <SwitcherColumn />
        <SwitcherColumn />
      </Switcher>
    </Container>
  </div>
);

export default LayoutSwitcher;
