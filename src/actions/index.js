export const persist = (data) => {
  return {
    type: "PERSIST",
    payload: data,
  };
};
