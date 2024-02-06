import { useEffect, useState } from "react";
import axios from 'axios';
import FilmPoster from '../../components/FilmPoster';

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=9ebbf65c80c0e6ee15f83825a6422dd5`
        );
        setFilms(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="">
      <h1 className=' text-gray-200 font-extrabold text-4xl mb-7'>Películas en cartelera</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2  lg:grid-cols-4 ">
        {isLoading ? (
          <p>Cargando películas...</p>
        ) : (
          films.map((film) => (
            <FilmPoster
              key={film.id}
              id={film.id}
              title={film.title}
              posterUrl={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default Films;
