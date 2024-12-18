import type { PropsWithChildren } from 'react';

export const Note = ({ children }: PropsWithChildren) => {
  return <aside className="notes">{children}</aside>;
};
