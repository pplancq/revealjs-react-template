import { Reveal } from '@Front/App/Reveal';
import { Slides } from '@Front/App/Slides';
import { revealConfig } from '@Front/Config/reveal';
import { slides } from '@Front/Slides';
import { StrictMode } from 'react';

export const App = () => {
  return (
    <StrictMode>
      <Reveal config={revealConfig}>
        <Slides slides={slides} />
      </Reveal>
    </StrictMode>
  );
};
