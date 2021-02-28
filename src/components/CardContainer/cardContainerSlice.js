import { createSlice } from '@reduxjs/toolkit';

const index = 2;
const initialState = {
  usuarios: {
    index,
    isLoading: false
  },
  fuentes: {
    index,
    isLoading: false
  },
  conciliaciones: {
    index,
    isLoading: false
  },
  tableros: {
    index,
    isLoading: false
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

export const loadMore = (key) => dispatch => {
  dispatch(loading(key));
  setTimeout(() => {
    dispatch(loading(key));
    dispatch(changeIndex(key));
  }, 1500);
};

export const { changeIndex, loading, reset } = searchSlice.actions;

export default searchSlice.reducer;
