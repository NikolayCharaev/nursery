export const titleAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const itemsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
