import { useEffect, useRef, useState } from 'react';
import { useSearch } from './hooks'

import './style.css';

const Search = () => {
  const ref = useRef();
  const doSearch = useSearch();
  const [activeClear, setActiveClear] = useState(false);
  const handleChange = ({ target }) => setActiveClear(target.value.length > 0);
  const handleSearch = ({ keyCode }) => {
    /* Enter button */
    if(keyCode === 13) {
      doSearch(ref.current.value);
    }
  }
  const handleClear = () => {
    ref.current.value = '';
    setActiveClear(false);
  }

  /* Focus the search input as soon as the page loads */
  useEffect(() => ref.current.focus());

  return <div className="search">
    <input
      onChange={handleChange}
      onKeyUp={handleSearch}
      className="search__input"
      type="text"
      ref={ref}
      placeholder="Escribe algo, ejemplo: CooperGrant" />
    <button
      className={`search__clear ${ activeClear ? 'search__clear--active' : ''}`}
      onClick={handleClear}
    >✕</button>
  </div>
}

export default Search;
