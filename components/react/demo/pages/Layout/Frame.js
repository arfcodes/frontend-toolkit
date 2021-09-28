/**
 * Demo Layout Frame
 */
import React from 'react';
import { Short } from '@demo/includes/SampleContent';
import { Frame, Container } from '@components/Layout';

const LayoutFrame = () => (
  <div className="d-layout">
    <Container size="xs">
      <h1>Frame Demo</h1>
      <div className="d-block bg--primary text--white">
        <Short />
      </div>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs">
      <h2>&lt;Frame aspectRatio=&quot;16-9&quot;&gt;</h2>
      <Frame aspectRatio="16-9">
        <img src="https://placeimg.com/1000/1000/any" alt="" />
      </Frame>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs">
      <h2>&lt;Frame aspectRatio=&quot;3-2&quot;&gt;</h2>
      <Frame aspectRatio="3-2">
        <img src="https://placeimg.com/1000/1000/any" alt="" />
      </Frame>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs">
      <h2>&lt;Frame aspectRatio=&quot;4-3&quot;&gt;</h2>
      <Frame aspectRatio="4-3">
        <img src="https://placeimg.com/1000/1000/any" alt="" />
      </Frame>
    </Container>
    <br />
    <br />
    <br />

    <Container size="xs">
      <h2>&lt;Frame aspectRatio=&quot;square&quot;&gt;</h2>
      <Frame aspectRatio="square">
        <img src="https://placeimg.com/1000/1000/any" alt="" />
      </Frame>
    </Container>
    <br />
    <br />
    <br />
  </div>
);

export default LayoutFrame;
