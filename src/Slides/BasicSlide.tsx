import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const BasicSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Basic Slide</Title>
      <Paragraph>This is a basic slide with simple text.</Paragraph>
    </Slide>
  );
};
