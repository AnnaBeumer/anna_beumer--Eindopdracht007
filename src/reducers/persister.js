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
    case "A-Z_Title":
      state = action.payload.songs.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return 1;
        }
        return 0;
      });
      return state;
    case "Z-A_Title":
      state = action.payload.songs.sort((a, b) => {
        if (a.title > b.title) {
          return -1;
        }
        if (a.title < b.title) {
          return 1;
        }
        return 0;
      });
      return state;
    case "A-Z_Artist":
      state = action.payload.songs.sort((a, b) => {
        if (a.artist < b.artist) {
          return -1;
        }
        if (a.artist > b.artist) {
          return 1;
        }
        return 0;
      });
      return state;
    case "Z-A_Artist":
      state = action.payload.songs.sort((a, b) => {
        if (a.artist > b.artist) {
          return -1;
        }
        if (a.artist < b.artist) {
          return 1;
        }
        return 0;
      });
      return state;
    case "Delete":
      state = action.payload.songs.filter((song) => {
        return song.key!==action.id;
      });
      return state;
    default:
      return [];
  }
};

export default persistReducer;
