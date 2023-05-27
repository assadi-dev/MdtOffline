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

/**
 *
 * @param {void} callback
 * @param {*} delay
 * @returns
 */
export const delayExecution = (callback, delay) => {
  return new Promise((resoleve) => {
    const idTimeout = setTimeout(() => {
      callback();
      resoleve("done");
      clearTimeout(idTimeout);
    }, delay);
  });
};
