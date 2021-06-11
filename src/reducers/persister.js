const persistReducer = (state, action) => {
  switch (action.type) {
    case "PERSIST":
      // zoeken naar bestaande item
      let index = state.findIndex((entry) => {
        return entry.key === action.payload.key;
      });
      //   als hij al bestaat vervang anders voeg het toe
      if (index > -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    default:
      return [];
  }
};

export default persistReducer;
