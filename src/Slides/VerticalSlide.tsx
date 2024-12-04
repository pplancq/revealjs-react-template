import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

import classes from './VerticalSlide.module.scss';

export const VerticalSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2" className={classes.title}>
          Slide with Vertical Sub-Slides
        </Title>
        <Paragraph>
          This slide contains vertical sub-slides. Use the arrow down keys to navigate between them.
        </Paragraph>
      </Slide>

      <Slide>
        <Title variant="h3">Vertical Slide 1</Title>
        <Paragraph>This is the first vertical slide.</Paragraph>
      </Slide>

      <Slide>
        <Title variant="h3">Vertical Slide 2</Title>
        <Paragraph>This is the second vertical slide.</Paragraph>
      </Slide>

      <Slide>
        <Title variant="h3">Vertical Slide 3</Title>
        <Paragraph>This is the third vertical slide.</Paragraph>
      </Slide>
    </Slide>
  );
};
