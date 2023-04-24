import React, { useEffect, useState } from 'react';

const NoSsr = ({ children }: any): any => {
  const [isMounted, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{isMounted ? children : null}</>;
};

export default NoSsr;
