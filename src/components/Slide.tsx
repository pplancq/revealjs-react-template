import type { ComponentProps, PropsWithChildren } from 'react';

type SlideProps = {
  autoAnimate?: boolean;
  autoAnimateId?: string;
  autoAnimateRestart?: boolean;
} & ComponentProps<'section'>;

export const Slide = ({
  children,
  autoAnimate,
  autoAnimateId,
  autoAnimateRestart,
  ...props
}: PropsWithChildren<SlideProps>) => {
  return (
    <section
      data-auto-animate={autoAnimate}
      data-auto-animate-id={autoAnimateId}
      data-auto-animate-restart={autoAnimateRestart}
      {...props}
    >
      {children}
    </section>
  );
};
