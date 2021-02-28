import { useDispatch } from 'react-redux';
import { reset } from '../CardContainer/cardContainerSlice';
import { searchResults } from './searchSlice';
import { doSearch } from '../../api/search';

/* Handles the api calls and saves the data in store */
const useSearch =  () => {
  const dispatch = useDispatch();
  return async (query) => {
    const results = await doSearch(query);
    dispatch(searchResults(results));
    /* After a new call, the state of the cards need to be reset in order to keep the initial behavrio */
    dispatch(reset());
  }
}

export { useSearch };
