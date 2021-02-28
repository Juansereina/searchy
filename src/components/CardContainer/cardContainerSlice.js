import { createSlice } from '@reduxjs/toolkit';

/* Helpers for testing purposes */
const index = 2;
const isLoading = false;

const initialState = {
  usuarios: {
    index,
    isLoading
  },
  fuentes: {
    index,
    isLoading
  },
  conciliaciones: {
    index,
    isLoading
  },
  tableros: {
    index,
    isLoading
  },
}

export const searchSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    changeIndex: (state, action)  => {
      state[action.payload].index += 2;
    },
    loading: (state, action)  => {
      state[action.payload].isLoading = !state[action.payload].isLoading;
    },
    reset: ()  => initialState,
  },
});

/* Changes the store to show the loader, then, increses the number of cards to be renders */
export const loadMore = (key) => dispatch => {
  dispatch(loading(key));
  setTimeout(() => {
    dispatch(loading(key));
    dispatch(changeIndex(key));
  }, 1500);
};

export const { changeIndex, loading, reset } = searchSlice.actions;

export default searchSlice.reducer;
