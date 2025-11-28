import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';

const Popular = () => {

  //  State variable 
  const [movies, setMovies] = useState([]);
  useEffect(()=>{
    fetchMovies();
  });

  const fetchMovies = async () => {

const response = await fetch(

"https://api.themoviedb.org/3/movie/popular?api_key=0e4b5afddcafcbf9c91b663d9f71b31a"

 );

const data = await response.json();

console.log(data);

setMovies(data.results);

 };

  return (
    <div className="movie-grid">
       {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
      
    </div>
  );
}

export default Popular

// ?api_key=0e4b5afddcafcbf9c91b663d9f71b31a THE API KEY TO GET LISTS