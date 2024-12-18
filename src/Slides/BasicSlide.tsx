import { Note } from '@Front/components/Note';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const BasicSlide = () => {
  return (
    <Slide>
      <Title variant="h2">Basic Slide</Title>
      <Paragraph>This slide use reveal.js framework</Paragraph>
      <Paragraph>
        Press "f" to enter full screen mode, and press "s" to enter speaker mode. Use arrow keys to navigate between
      </Paragraph>
      <Note>This is a note. You can use it to provide additional information to the audience.</Note>
    </Slide>
  );
};
