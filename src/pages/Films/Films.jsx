import './Films.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilms } from '../../slices/filmsThunks';
import FilmPoster from '../../components/FilmPoster';

function Films() {
  const dispatch = useDispatch();
  const { films, isLoading } = useSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <section className="">
      <h1 className=' text-gray-200 font-extrabold text-4xl mb-7'>Películas en cartelera</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {isLoading ? (
          <p>Cargando películas...</p>
        ) : (
          films.map((film) => (
            <FilmPoster key={film.id} {...film} />
          ))
        )}
      </div>
    </section>
  );
}

export default Films;
