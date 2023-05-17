export const useDelayedChildrenAnimation = () => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 0.2,
        when: 'beforeChildren',
        staggerChildren: 0.3,
      },
    },
  };
  return {
    itemVariants,
    containerVariants,
  };
};
