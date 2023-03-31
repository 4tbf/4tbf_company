import React from 'react';

export type TextProps<C extends React.ElementType> = {
  as?: C;
  color?: string | 'black';
};

export type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;
