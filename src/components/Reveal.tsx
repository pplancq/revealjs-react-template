import { type PropsWithChildren, useLayoutEffect, useRef } from 'react';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/dracula.css';
import RevealJs, { Api } from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';
import 'reveal.js/plugin/highlight/monokai.css';

export const Reveal = ({ children }: PropsWithChildren) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<Api | null>(null);

  useLayoutEffect(() => {
    const rootEl = rootRef.current;
    if (!rootEl) {
      return () => {};
    }
    let reveal = revealRef.current;
    if (reveal !== null) {
      return () => {};
    }

    reveal = new RevealJs(rootEl, {
      hash: true,
      pdfSeparateFragments: false,
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });

    reveal.initialize().then(() => {
      console.info('Reveal.js is loaded.');
    });

    return () => {
      if (reveal === null) {
        return;
      }
      try {
        reveal.destroy();
        reveal = null;
      } catch {
        console.warn('Reveal.js destroy call failed.');
      }
    };
  }, []);

  return (
    <div className="reveal" ref={rootRef}>
      {children}
    </div>
  );
};
