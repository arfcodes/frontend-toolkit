/**
 * Demo Title Style1
 */
import React from 'react';
// import PropTypes from 'prop-types';

import { Container } from '@components/Layout';
import { Short } from '@demo/includes/SampleContent';
import Title from '@components/Title/Style1';

const TitleStyle1 = () => (
  <div className="d-title">
    <Container size="md">
      <h1>Title Style 1</h1>
      <br />
      <Title className="title--style1" size="2xs">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="xs">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="sm">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="md">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="lg">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="xl">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
      <Title className="title--style1" size="2xl">
        Lorem Ipsum Dolor Sit Amet
      </Title>
      <Short />
      <br />
      <br />
    </Container>
  </div>
);

export default TitleStyle1;
