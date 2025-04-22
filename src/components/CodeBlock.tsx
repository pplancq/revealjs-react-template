import { BaseComponent, type BaseComponentProps } from '@Front/components/BaseComponent';

type MarkdownBlockProps = {
  language?: string;
  highlightLines?: string;
} & BaseComponentProps<'div' | 'span'>;

export const CodeBlock = ({ children, language, highlightLines, ...props }: MarkdownBlockProps) => {
  return (
    <BaseComponent component="div" {...props} data-markdown>
      <textarea data-template>
        {`\`\`\`${language} [${highlightLines}]
${children}
\`\`\``}
      </textarea>
    </BaseComponent>
  );
};
