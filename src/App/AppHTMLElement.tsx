import { App } from '@Front/App/App';
import { createRoot, type Root } from 'react-dom/client';

export class AppHTMLElement extends HTMLElement {
  private readonly root: Root;

  constructor() {
    super();

    this.root = createRoot(this);
  }

  connectedCallback() {
    this.root.render(<App />);
  }

  disconnectedCallback() {
    queueMicrotask(() => this.root.unmount());
  }
}
