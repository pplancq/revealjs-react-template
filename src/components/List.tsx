import { BaseComponent, type BaseComponentProps } from '@Front/components/BaseComponent';

type ListProps = {} & BaseComponentProps<'ul'>;

export const List = ({ ...props }: ListProps) => {
  return <BaseComponent component="ul" {...props} />;
};
