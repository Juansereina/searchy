import { createSlice } from '@reduxjs/toolkit';

const index = 2;

export const searchSlice = createSlice({
  name: 'cards',
  initialState: {
    usuarios: {
      index
    },
    fuentes: {
      index
    },
    conciliaciones: {
      index
    },
    tableros: {
      index
    },
  },
  reducers: {
    changeIndex: (state, action)  => {
      state.index= action.payload;
    }
  },
});

export const { searchResults } = searchSlice.actions;

export const selectCount = state => state.search?.result;

export default searchSlice.reducer;
