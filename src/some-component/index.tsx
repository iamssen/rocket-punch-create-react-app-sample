import React, { ReactNode } from 'react';

export interface SomeComponentProps {
  children: ReactNode;
}

export function SomeComponent({ children }: SomeComponentProps) {
  return (
    <p>{children}</p>
  );
}