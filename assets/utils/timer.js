export const sleep = (delay) => {
  return new Promise((resolve, reject) => {
    try {
      const timeId = setTimeout(() => {
        resolve("done");
        clearTimeout(timeId);
      }, delay);
    } catch (error) {
      reject(error);
    }
  });
};
