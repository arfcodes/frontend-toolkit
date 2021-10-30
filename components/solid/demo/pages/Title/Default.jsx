/**
 * Demo Title Default
 */
import { Container } from '@components/Layout';
import { Short } from '@demo/includes/SampleContent';
import Title from '@components/Title';

const TitleDefault = () => (
  <div className="d-title">
    <Container size="md">
      <h1>Title Default</h1>
      <br />
      <Title size="2xs">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="xs">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="sm">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="md">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="lg">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="xl">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
      <Title size="2xl">Lorem Ipsum Dolor Sit Amet</Title>
      <Short />
      <br />
      <br />
    </Container>
  </div>
);

export default TitleDefault;
