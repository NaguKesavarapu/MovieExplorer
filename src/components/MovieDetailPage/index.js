// src/components/MovieDetailPage/index.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../api';
import './index.css';

function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getMovieDetails = async () => {
      setLoading(true);
      try {
        const data = await fetchMovieDetails(id);
        setMovie(data);
      } catch {
        setError('Failed to fetch movie details.');
      }
      setLoading(false);
    };

    getMovieDetails();
  }, [id]);

  if (loading) return <p className="loader">Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    movie && (
      <div className="movie-detail">
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Title}</h2>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Director:</strong> {movie.Director}</p>
        <p><strong>Cast:</strong> {movie.Actors}</p>
        <p><strong>Release Date:</strong> {movie.Released}</p>
        <p><strong>Runtime:</strong> {movie.Runtime}</p>
        <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      </div>
    )
  );
}

export default MovieDetailPage;
