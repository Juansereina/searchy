import Search from './search';
import { handleSearch } from './searchActions';

const SearchWithActions = () => <Search handleSearch={handleSearch} />;

export default SearchWithActions;
