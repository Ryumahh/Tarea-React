import { useEffect, useState } from "react";
import { Carousel } from 'flowbite-react';
import { Link } from "react-router-dom";
import axios from 'axios';
import FilmPoster from '../../components/FilmPoster';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  // Fetch popular movies from API
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=9ebbf65c80c0e6ee15f83825a6422dd5`
        );
        setFilms(response.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
        setIsLoading(false);
      }
    };

    fetchPopularMovies();
  }, []);

  return (
    <>
      <section
        className="w-full h-full mb-6 py-12 md:py-24 lg:py-32 xl:py-48"
        style={{
          backgroundImage: "url('https://archello.s3.eu-central-1.amazonaws.com/images/2013/01/24/23-Multikino-Zote-Tarasy-by-Olo-Studioj.1506664133.2104.pg')",
          backgroundSize: "cover",
        }}
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl text-white-500 font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Bienvenido a Film<span className='text-yellow-500'>Hub</span>
              </h1>
            </div>
            <div className="space-x-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-yellow-600/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 "
                to="/films"
              >
                Encuentra tu película favorita
              </Link>
            </div>
          </div>
        </div>
      </section>


        <h1 className='text-gray-200 font-extrabold text-4xl mb-7'>Películas Populares</h1>
        <section className="mb-6 h-1/5 w-1/5 sliderIn">
        {isLoading ? (
          <p>Cargando películas...</p>
        ) : (
          <Carousel>
            {films.map((film) => (
              <FilmPoster
                key={film.id}
                id={film.id}
                posterUrl={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
              />
            ))}
          </Carousel>
        )}
      </section>
    </>
  );
}

export default Home;
