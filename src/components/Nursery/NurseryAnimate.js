export const animateCard = {
  hidden: { x: 120, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

export const animateCardMini = {
  hidden: { x: 0, y: 100, opacity: 0 },
  visible: { x: 0, y: 0, opacity: 1 },
};

export const animateImg = {
  hidden: { x: 120, y: 0, opacity: 1 },
  visible: { x: 0, y: 0, opacity: 1 },
};

export const textItemsContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

export const textItem = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
