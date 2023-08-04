import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import React, { useState, useEffect } from 'react';


export const MainView = () => 
{const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://my-flix-api-7db6b3acef22.herokuapp.com/movies') // Replace the URL with your actual API endpoint
      .then((response) => response.json()) // Parse the response data as JSON
      .then((data) => {
        // Once the data is fetched, update the movies state with the fetched data
        setMovies(data); // Assuming your API response is an array of movie objects
      })
      .catch((error) => {
        // Handle any errors that occurred during the fetch
        console.error('Error fetching data:', error);
      });
  }, []);



  const [selectedMovie, setSelectedMovie] = useState(null);

  if (selectedMovie) {
    return (
      <MovieView movie={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedMovie) => {
          setSelectedMovie(newSelectedMovie);
        }}
      />
      ))}
    </div>
  );
};
