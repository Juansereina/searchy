import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../components/Search/searchSlice';
import cardsReducer from '../components/CardContainer/cardContainerSlice';

/* Imports all reducers components */
export default configureStore({
  reducer: {
    cards: cardsReducer,
    search: searchReducer
  },
});
