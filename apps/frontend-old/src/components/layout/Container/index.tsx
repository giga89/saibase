import { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren<unknown>) => {
  return <div className="mx-auto container pb-10 px-5 sm:px-0">{children}</div>;
};
