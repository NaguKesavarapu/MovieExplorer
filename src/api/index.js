// src/api/index.js
const API_KEY = '472e7f9c';
const BASE_URL = 'http://www.omdbapi.com/';

export const fetchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
