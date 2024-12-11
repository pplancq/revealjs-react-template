import type { Options } from 'reveal.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight';
import RevealMarkdown from 'reveal.js/plugin/markdown/markdown';
import RevealNotes from 'reveal.js/plugin/notes/notes';

export const revealConfig: Options = {
  hash: true,
  pdfSeparateFragments: false,
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
};
