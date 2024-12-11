import { BaseComponent, type BaseComponentProps } from '@Front/components/BaseComponent';

type BlockProps = {
  variant?: 'div' | 'span';
} & BaseComponentProps<'div' | 'span'>;

export const Block = ({ variant = 'div', ...props }: BlockProps) => {
  return <BaseComponent component={variant} {...props} />;
};
