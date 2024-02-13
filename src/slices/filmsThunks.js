import { getMoviesBy } from '../services/films';
import { setFilms, startLoadingFilms } from './filmsSlice';

export const getFilms = () => {
  return async (dispatch) => {
    dispatch(startLoadingFilms());

    try {
      const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=9ebbf65c80c0e6ee15f83825a6422dd5');
      if (!res.ok) {
        // Notificar error con dispatch
      }

      const data = await res.json();
      const films = data.results;

      dispatch(setFilms({ films }));
    } catch (error) {
      // Notificar error con dispatch
    }
  };
};
