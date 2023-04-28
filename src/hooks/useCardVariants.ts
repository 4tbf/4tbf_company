export const useCardVariants = (y = 300) => {
  return {
    offscreen: {
      y,
    },
    onscreen: {
      y: 0,
      transition: {
        type: 'spring',
        bounce: 0.2,
        duration: 0.7,
      },
    },
  };
};
