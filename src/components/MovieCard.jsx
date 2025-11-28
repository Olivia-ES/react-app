import React from 'react'
import './MovieCard.css';

const MovieCard = ({ movie }) => {
 return (
  <div className="movie-card">
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
    <div className="movie-details">
    <h3>{movie.title}</h3>
    <p>{movie.overview.slice(0, 150)+"..."}</p></div>
    <h2>{movie.release_date}</h2>
    <h4>{movie.original_language}"orginal language"</h4>
  </div>
  );
};

export default MovieCard