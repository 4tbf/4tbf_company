import { useRef, useState } from 'react';

const useCollapse = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };
  const contentRef: any = useRef();
  return {
    open,
    contentRef,
    handleToggle,
  };
};

export default useCollapse;
