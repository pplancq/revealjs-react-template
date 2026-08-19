import { BaseComponent, type BaseComponentProps } from "@Front/components/BaseComponent";

type MarkdownBlockProps = {} & BaseComponentProps<"div" | "span">;

export const MarkdownBlock = ({ children, ...props }: MarkdownBlockProps) => (
  <BaseComponent component="div" {...props} data-markdown>
    <textarea data-template>{children}</textarea>
  </BaseComponent>
);
