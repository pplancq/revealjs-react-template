import { BaseComponent, type BaseComponentProps } from '@Front/components/BaseComponent';

type TitleProps = {} & BaseComponentProps<'p'>;

export const Paragraph = ({ ...props }: TitleProps) => {
  return <BaseComponent component="p" {...props} />;
};
