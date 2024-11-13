// src/components/MovieSearchPage/index.js
import React, { useState } from 'react';
import { fetchMovies } from '../../api';
import MovieCard from '../MovieCard';
import SearchBar from '../SearchBar';
import './index.css';

function MovieSearchPage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchMovies(query);
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError('Failed to fetch movies.');
    }
    setLoading(false);
  };

  return (
    <div className="movie-search-page">
      <SearchBar onSearch={handleSearch} />
      {loading && <p className="loader"> Loading...</p>}
      {error && <p className="error">{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieSearchPage;
