/**
 * Demo CTA
 */
import React from 'react';
import { Container } from '@components/Layout';
import Cta from '@components/Cta/WithSection';

const CtaDesc = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras purus lorem,
    tempor in magna sed, suscipit tincidunt neque. Praesent orci nisl, volutpat
    ut elit sit amet, tristique facilisis turpis. Mauris purus erat, vehicula at
    viverra ut, cursus ac erat. Nam bibendum arcu id tristique ullamcorper.
    Aenean non dictum eros, id consequat nunc. Praesent ac est tristique, preti
  </p>
);
const CtaAction = () => (
  <a
    href="http://google.com"
    className="button button--default button--primary button--md"
  >
    Read More
  </a>
);

const PgCta = () => (
  <div className="p-section">
    <Container size="lg">
      <h2>CTA Info Only</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      sectionProps={{
        containerSize: 'md',
      }}
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
    <Container size="lg">
      <h2>CTA With Thumbnail</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      thumbnail="https://placeimg.com/600/600/tech"
      sectionProps={{
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
    <Container size="lg">
      <h2>CTA With Thumbnail on Right</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      thumbnail="https://placeimg.com/600/600/tech"
      thumbnailPosition="right"
      sectionProps={{
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
    <Container size="lg">
      <h2>CTA With Content on Top</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      thumbnail="https://placeimg.com/600/600/tech"
      thumbnailPosition="right"
      sectionProps={{
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      vAlign="top"
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
    <Container size="lg">
      <h2>CTA With BG Image</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      sectionProps={{
        bg: 'https://placeimg.com/1000/560/tech/grayscale',
        bgOpacity: 0.4,
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      thumbnail="https://placeimg.com/600/600/tech"
      sectionProps={{
        bg: 'https://placeimg.com/1000/560/tech/grayscale',
        bgOpacity: 0.4,
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
    <Container size="lg">
      <h2>CTA With Content on Center</h2>
    </Container>
    <br />
    <Cta
      title="Section Number 1"
      subtitle="This is sample for section number 1"
      sectionProps={{
        bg: 'https://placeimg.com/1000/560/tech/grayscale',
        bgOpacity: 0.4,
        containerSize: 'md',
        className: 'bg--muted',
        space: '3xl',
      }}
      textAlign="center"
      action={<CtaAction />}
    >
      <CtaDesc />
    </Cta>
    <br />
    <br />
  </div>
);

export default PgCta;
