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
  const isMountedRef = useRef(false);

  useLayoutEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return () => {};
    }
    isMountedRef.current = true;

    const rootEl = rootRef.current as HTMLDivElement;

    revealRef.current = new RevealJs(rootEl, {
      hash: true,
      pdfSeparateFragments: false,
      plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
    });

    revealRef.current.initialize().then(() => {
      console.info('Reveal.js is loaded.');
    });

    return () => {
      try {
        revealRef.current?.destroy();
        revealRef.current = null;
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
