import { CodeBlock } from '@Front/components/CodeBlock';
import { MarkdownBlock } from '@Front/components/MardownBlock';
import { Slide } from '@Front/components/Slide';
import { Title } from '@Front/components/Title';

export const MarkdownSlide = () => {
  return (
    <Slide>
      <Slide>
        <Title variant="h3">Slide with markdown block</Title>
        <MarkdownBlock>
          {`
          This is a markdown block. You can write markdown here and it will be rendered as HTML.
          
          - This is a list item
          - This is another list item
          
          **Bold text**
          
          *Italic text*
          
          [Link](https://example.com)
        `}
        </MarkdownBlock>
      </Slide>
      <Slide>
        <Title variant="h3">Slide with markdown code with highlighting</Title>
        <CodeBlock language="js" highlightLines="1-2|3|4">
          {`let a = 1;
          let b = 2;
          let c = x => 1 + 2 + x;
          c(3);`}
        </CodeBlock>
      </Slide>
    </Slide>
  );
};
