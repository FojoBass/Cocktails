import React from 'react';
import { useGlobalContext } from '../context';

const Search = () => {
  const { input, setInput } = useGlobalContext();
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <article className='search-container'>
      <form className='search'>
        <input
          type='text'
          placeholder='search for your favourite cocktail'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          ref={inputRef}
        />
      </form>
    </article>
  );
};

export default Search;
