export const persist = (data, type, id) => {
  switch (type) {
    case "A-Z_Title":
      return {
        type: "A-Z_Title",
        payload: data,
      };
    case "Z-A_Title":
      return {
        type: "Z-A_Title",
        payload: data,
      };
    case "A-Z_Artist":
      return {
        type: "A-Z_Artist",
        payload: data,
      };
    case "Z-A_Artist":
      return {
        type: "Z-A_Artist",
        payload: data,
      };
    case "Delete":
      return {
        type: "Delete",
        payload: data,
        id:id,
      };
    default:
      return {
        type: "PERSIST",
        payload: data,
      };
  }
};
