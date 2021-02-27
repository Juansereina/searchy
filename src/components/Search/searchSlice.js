import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {},
  reducers: {
    searchResults: (state, action)  => {
      console.log(action);
      state.result= action.payload;
    }
  },
});

export const { searchResults } = searchSlice.actions;

export default searchSlice.reducer;
