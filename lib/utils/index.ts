export const getRandomNum = (range: number) => {
  return Math.floor(Math.random() * range) + 1;
};

export const wait = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
