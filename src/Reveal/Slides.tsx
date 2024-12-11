import type { ComponentType } from 'react';

type SlidesProps = {
  slides: ComponentType[];
};

export const Slides = ({ slides }: SlidesProps) => {
  return (
    <div className="slides">
      {slides.map(Slide => (
        <Slide key={Slide.name || Slide.displayName} />
      ))}
    </div>
  );
};
