import React, { useState, useRef, useEffect } from 'react';

const SearchBar = ({ city, setCity, handleSearch , setError }) => {
  const [isFocused, setIsFocused] = useState(false);
  const searchInput = useRef(null);

  const handleFocus = () => {
    setIsFocused(true); 
  };

  const handleBlur = () => {
    setIsFocused(false)
  };

  useEffect(() => {
    if (!isFocused) {
        searchInput.current.focus()
        setError(null)
    }
  }, [isFocused])

  return (
    <form className="search-bar">
      <input
        ref={searchInput}
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <button type="submit" onClick={(e) =>{e.preventDefault();  handleSearch()}}>Search</button>
    </form>
  );
};

export default SearchBar;
