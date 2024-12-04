import { clsx } from 'clsx';
import type { ComponentProps, ElementType } from 'react';

export type BaseComponentProps<C extends ElementType> = {
  component?: C;
  className?: string;
  fragment?: boolean;
  fragmentIndex?: number;
} & ComponentProps<C>;

export const BaseComponent = <C extends ElementType = 'div'>({
  component: Component = 'div',
  fragment,
  fragmentIndex,
  className,
  ...props
}: BaseComponentProps<C>) => {
  return (
    <Component className={clsx(fragment && 'fragment', className)} data-fragment-index={fragmentIndex} {...props} />
  );
};
