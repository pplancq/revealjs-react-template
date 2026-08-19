import { BaseComponent, type BaseComponentProps } from "@Front/components/BaseComponent";

type ParagraphProps = {} & BaseComponentProps<"p">;

export const Paragraph = ({ ...props }: ParagraphProps) => <BaseComponent component="p" {...props} />;
