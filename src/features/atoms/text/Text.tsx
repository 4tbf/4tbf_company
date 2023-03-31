import React from 'react';
import { Props } from './types';

const Text = <C extends React.ElementType = 'span'>({
  as,
  color,
  children,
  ...restProps
}: Props<C>) => {
  const Component = as || 'span';

  const style = color ? { style: { color } } : {};

  return (
    <Component {...restProps} {...style}>
      {children}
    </Component>
  );
};

export default Text;
