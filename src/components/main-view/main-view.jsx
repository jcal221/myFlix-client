import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setMovies] = useState([
        {
          title: 'Inception',
          description: 'A mind-bending science fiction thriller directed by Christopher Nolan.',
          genre: {
            name: 'Sci-Fi',
            description: 'Explore the realms of imagination and technology with these mind-bending science fiction films.'
          },
          director: {
            name: 'Christopher Nolan',
            bio: 'Christopher Nolan is a British-American filmmaker known for his distinctive and visually stunning films.',
            birthYear: 1970,
            deathYear: null
          },
          actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
          featured: false
        },
        {
          title: 'The Dark Knight',
          description: 'A gripping action-packed superhero film directed by Christopher Nolan.',
          genre: {
            name: 'Action',
            description: 'Experience thrilling action sequences and adrenaline-pumping excitement with these gripping action films.'
          },
          director: {
            name: 'Christopher Nolan',
            bio: 'Christopher Nolan is a British-American filmmaker known for his distinctive and visually stunning films.',
            birthYear: 1970,
            deathYear: null
          },
          actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
          featured: false
        },
        {
          title: 'Pulp Fiction',
          description: 'A nonlinear crime film directed by Quentin Tarantino.',
          genre: {
            name: 'Crime',
            description: 'Dive into the world of crime and suspense with these gripping and unpredictable crime films.'
          },
          director: {
            name: 'Quentin Tarantino',
            bio: 'Quentin Tarantino is an American filmmaker and screenwriter known for his nonlinear storytelling and stylized violence.',
            birthYear: 1963,
            deathYear: null
          },
          actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
          featured: false
        },
        {
          title: 'Fight Club',
          description: 'An intense psychological drama directed by David Fincher.',
          genre: {
            name: 'Drama',
            description: 'Experience raw emotions and intense character studies with these powerful and thought-provoking dramas.'
          },
          director: {
            name: 'David Fincher',
            bio: 'David Fincher is an American filmmaker known for his dark and atmospheric storytelling.',
            birthYear: 1962,
            deathYear: null
          },
          actors: ['Brad Pitt', 'Edward Norton', 'Helena Bonham Carter'],
          imagePath: 'https://m.media-amazon.com/images/I/51iOANjtCQL._AC_UF894,1000_QL80_.jpg',
          featured: false
        },
        {
          title: 'The Shawshank Redemption',
          description: 'A powerful prison drama directed by Frank Darabont.',
          genre: {
            name: 'Drama',
            description: 'Experience raw emotions and intense character studies with these powerful and thought-provoking dramas.'
          },
          director: {
            name: 'Frank Darabont',
            bio: 'Frank Darabont is an American filmmaker and screenwriter known for his adaptations of Stephen King novels.',
            birthYear: 1959,
            deathYear: null
          },
          actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
          imagePath: 'https://m.media-amazon.com/images/I/519NBNHX5BL._AC_UF894,1000_QL80_.jpg',
          featured: false
        },
        {
          title: 'The Godfather',
          description: 'An iconic crime film directed by Francis Ford Coppola.',
          genre: {
            name: 'Crime',
            description: 'Dive into the world of crime and suspense with these gripping and unpredictable crime films.'
          },
          director: {
            name: 'Francis Ford Coppola',
            bio: 'Francis Ford Coppola is an American filmmaker and screenwriter renowned for his contributions to the New Hollywood era.',
            birthYear: 1939,
            deathYear: null
          },
          actors: ['Marlon Brando', 'Al Pacino', 'James Caan'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg',
          featured: false
        },
        {
          title: 'The Matrix',
          description: 'A groundbreaking science fiction action film directed by The Wachowskis.',
          genre: {
            name: 'Sci-Fi',
            description: 'Explore the realms of imagination and technology with these mind-bending science fiction films.'
          },
          director: {
            name: 'The Wachowskis',
            bio: 'The Wachowskis are American filmmakers known for their innovative and visually stunning work.',
            birthYear: 1965,
            deathYear: null
          },
          actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
          imagePath: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_UF894,1000_QL80_.jpg',
          featured: false
        },
        {
          title: 'Goodfellas',
          description: 'A gripping crime drama directed by Martin Scorsese.',
          genre: {
            name: 'Crime',
            description: 'Dive into the world of crime and suspense with these gripping and unpredictable crime films.'
          },
          director: {
            name: 'Martin Scorsese',
            bio: 'Martin Scorsese is an American filmmaker and screenwriter recognized for his explorations of the criminal underworld.',
            birthYear: 1942,
            deathYear: null
          },
          actors: ['Robert De Niro', 'Ray Liotta', 'Joe Pesci'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
          featured: false
        },
        {
          title: 'Interstellar',
          description: 'An epic space exploration film directed by Christopher Nolan.',
          genre: {
            name: 'Sci-Fi',
            description: 'Explore the realms of imagination and technology with these mind-bending science fiction films.'
          },
          director: {
            name: 'Christopher Nolan',
            bio: 'Christopher Nolan is a British-American filmmaker known for his distinctive and visually stunning films.',
            birthYear: 1970,
            deathYear: null
          },
          actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
          imagePath: 'https://www.themoviedb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
          featured: false
        },
        {
          title: 'The Avengers',
          description: 'A thrilling superhero ensemble film directed by Joss Whedon.',
          genre: {
            name: 'Action',
            description: 'Experience thrilling action sequences and adrenaline-pumping excitement with these gripping action films.'
          },
          director: {
            name: 'Joss Whedon',
            bio: 'Joss Whedon is an American filmmaker, screenwriter, and television producer known for his work in the superhero genre.',
            birthYear: 1964,
            deathYear: null
          },
          actors: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson'],
          imagePath: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR90,0,630,1200_AL_.jpg',
          featured: false
        }
      // Add more movie objects here
    ]);

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
