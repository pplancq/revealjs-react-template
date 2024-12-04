import { slides } from '@Front/Slides';

export const Slides = () => {
  return (
    <div className="slides">
      {slides.map(Slide => (
        <Slide key={Slide.name || Slide.displayName} />
      ))}
    </div>
  );
};
