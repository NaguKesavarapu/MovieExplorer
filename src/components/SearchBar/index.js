// src/components/SearchBar/index.js
import React, { useState } from 'react';
import './index.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <div>
      <h1 className="heading">Search Your Favourite Movies Here.</h1>
      </div>
      <div>
      <input
        className="input-element"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="button">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
