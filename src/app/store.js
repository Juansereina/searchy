import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../components/Search/searchSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    serach: searchReducer
  },
});
