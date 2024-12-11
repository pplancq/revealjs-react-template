import { Block } from '@Front/components/Block';
import { List } from '@Front/components/List';
import { ListItem } from '@Front/components/ListItem';
import { Paragraph } from '@Front/components/Paragraph';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const FragmentSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h2">Vertical Slide Demonstrating Animations</Title>
        <Paragraph fragment>First paragraph with a fragment.</Paragraph>
        <Paragraph fragment>Second paragraph with a fragment.</Paragraph>
      </Slide>

      <Slide>
        <Title variant="h3">Animated Fragments</Title>
        <Paragraph fragment animation="fade-in">
          Text that fades in.
        </Paragraph>
        <Paragraph fragment animation="grow">
          Text that grows.
        </Paragraph>
        <Paragraph fragment animation="shrink">
          Text that shrinks.
        </Paragraph>
      </Slide>

      <Slide>
        <Title variant="h3">Nested Fragments</Title>
        <Block fragment animation="fade-in">
          <Block fragment animation="highlight-red">
            <Block fragment animation="fade-out">
              Fade in {'>'} Turn red {'>'} Fade out
            </Block>
          </Block>
        </Block>
      </Slide>

      <Slide>
        <Title variant="h3">Two-Column List</Title>
        <Block style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'center' }}>
          <List>
            <ListItem fragment fragmentIndex={1}>
              Item 1
            </ListItem>
            <ListItem fragment fragmentIndex={3}>
              Item 3
            </ListItem>
            <ListItem fragment fragmentIndex={5}>
              Item 5
            </ListItem>
          </List>
          <List>
            <ListItem fragment fragmentIndex={2}>
              Item 2
            </ListItem>
            <ListItem fragment fragmentIndex={4}>
              Item 4
            </ListItem>
            <ListItem fragment fragmentIndex={6}>
              Item 6
            </ListItem>
          </List>
        </Block>
      </Slide>
    </Slide>
  );
};
