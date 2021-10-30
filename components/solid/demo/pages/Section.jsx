/**
 * Demo Section
 */
import { Container } from '@components/Layout';
import { Short } from '@demo/includes/SampleContent';
import Section from '@components/Section';
import Title from '@components/Title/Style1';

const PgSection = () => (
  <div className="p-section">
    <Container size="md">
      <h1>Section</h1>
    </Container>
    <br />
    <br />

    <Container size="md">
      <h2>Default</h2>
    </Container>
    <br />
    <Section
      className="bg--muted"
      title="First Section"
      titleClassName="title title--xl"
      containerSize="sm"
    >
      <Short />
    </Section>
    <br />
    <br />

    <Container size="md">
      <h2>Custom Content</h2>
    </Container>
    <br />
    <Section className="bg--muted">
      <Container size="md">
        <Title size="lg">First Section</Title>
        <Short />
      </Container>
    </Section>
    <br />
    <br />

    <Container size="md">
      <h2>With Background</h2>
    </Container>
    <br />
    <Section
      space="2xl"
      bg="https://placeimg.com/1000/560/tech/grayscale"
      title="First Section"
      titleClassName="title title--lg"
      containerSize="sm"
      bgOpacity={0.2}
      className="bg--black text--white"
    >
      <Short />
    </Section>
    <br />
    <br />

    <Container size="md">
      <h2>Set Space</h2>
    </Container>
    <br />
    <Section
      className="bg--muted"
      title="First Section"
      titleClassName="title title--xl"
      containerSize="sm"
      space={['md', '4xl']}
    >
      <Short />
    </Section>
    <br />
    <br />

    <Container size="md">
      <h2>Centering content</h2>
    </Container>
    <br />
    <Section
      className="bg--muted text--center"
      title="First Section"
      titleClassName="title title--xl"
      containerSize="sm"
      space="3xl"
    >
      <Short />
    </Section>
    <br />
    <br />
  </div>
);

export default PgSection;
