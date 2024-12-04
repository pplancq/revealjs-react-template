import { App } from '@Front/components/App';
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
        <App />
      </StrictMode>,
    );
  }

  disconnectedCallback() {
    queueMicrotask(() => this.root.unmount());
  }
}
