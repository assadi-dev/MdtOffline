export const sortDescListItems = (lists, keys) => {
  return lists.sort((a, b) => {
    a = new Date(a[keys]);
    b = new Date(b[keys]);
    return b.getTime() - a.getTime();
  });
};
