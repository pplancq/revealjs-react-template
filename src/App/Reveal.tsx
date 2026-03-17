import { type PropsWithChildren, useLayoutEffect, useRef } from 'react';
import RevealJs, { type RevealApi, type RevealConfig } from 'reveal.js';

import 'reveal.js/plugin/highlight/monokai.css';
import 'reveal.js/reveal.css';
import 'reveal.js/theme/dracula.css';

type RevealProps = {
  config: RevealConfig;
};

export const Reveal = ({ config, children }: PropsWithChildren<RevealProps>) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<RevealApi | null>(null);

  useLayoutEffect(() => {
    if (revealRef.current !== null) {
      return () => {};
    }

    const rootEl = rootRef.current as HTMLDivElement;

    revealRef.current = new RevealJs(rootEl, config);

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
  }, [config]);

  return (
    <div className="reveal" ref={rootRef}>
      {children}
    </div>
  );
};
