import { useDispatch } from 'react-redux';
import { reset } from '../CardContainer/cardContainerSlice';
import { searchResults } from './searchSlice';
import { doSearch } from '../../api/search';

const useSearch =  () => {
  const dispatch = useDispatch();
  return async (query) => {
    const results = await doSearch(query);
    dispatch(searchResults(results));
    dispatch(reset());
  }
}

export { useSearch };
