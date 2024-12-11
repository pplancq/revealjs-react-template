import { revealConfig } from '@Front/Config/reveal';
import { Reveal } from '@Front/Reveal/Reveal';
import { Slides } from '@Front/Reveal/Slides';
import { slides } from '@Front/Slides';
import { StrictMode } from 'react';
import { createRoot, type Root } from 'react-dom/client';

// eslint-disable-next-line import/no-default-export
export default class Bootstrap extends HTMLElement {
  private readonly root: Root;

  constructor() {
    super();

    this.root = createRoot(this);
  }

  connectedCallback() {
    this.root.render(
      <StrictMode>
        <Reveal config={revealConfig}>
          <Slides slides={slides} />
        </Reveal>
      </StrictMode>,
    );
  }

  disconnectedCallback() {
    queueMicrotask(() => this.root.unmount());
  }
}
