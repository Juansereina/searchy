import { useEffect, useRef } from 'react';
import './style.css';

const Search = ({ handleSearch }) => {
  const ref = useRef();

  useEffect(() => ref.current.addEventListener('keyup', handleSearch));

  return <input className="search" type="text" ref={ref}/>
}

export default Search;
