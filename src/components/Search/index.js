import { useEffect, useRef } from 'react';
import { useSearch } from './hooks'

import './style.css';

const Search = () => {
  const ref = useRef();
  const doSearch = useSearch();
  const handleSearch = ({ keyCode }) => {
    if(keyCode === 13) {
      doSearch(ref.current.value);
    }
  }

  useEffect(() => ref.current.focus());

  return <input onKeyUp={handleSearch} className="search" type="text" ref={ref} placeholder="Escribe algo, ejemplo: CooperGrant" />
}

export default Search;
