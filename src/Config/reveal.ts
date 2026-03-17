import type { RevealConfig } from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown';
import RevealNotes from 'reveal.js/plugin/notes';

export const revealConfig: RevealConfig = {
  hash: true,
  pdfSeparateFragments: false,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
};
