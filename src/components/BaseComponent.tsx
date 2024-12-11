import { clsx } from 'clsx';
import type { ComponentProps, ElementType } from 'react';

type Animation =
  | 'fade-in'
  | 'fade-out'
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in-then-out'
  | 'current-visible'
  | 'fade-in-then-semi-out'
  | 'grow'
  | 'semi-fade-out'
  | 'shrink'
  | 'strike'
  | 'highlight-red'
  | 'highlight-green'
  | 'highlight-blue'
  | 'highlight-current-red'
  | 'highlight-current-green'
  | 'highlight-current-blue';

export type BaseComponentProps<C extends ElementType> = {
  component?: C;
  className?: string;
  fragment?: boolean;
  fragmentIndex?: number;
  animation?: Animation;
} & ComponentProps<C>;

export const BaseComponent = <C extends ElementType = 'div'>({
  component: Component = 'div',
  fragment,
  fragmentIndex,
  className,
  animation,
  ...props
}: BaseComponentProps<C>) => {
  return (
    <Component
      className={clsx(className, fragment && 'fragment', animation)}
      data-fragment-index={fragmentIndex}
      {...props}
    />
  );
};
