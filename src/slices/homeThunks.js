import axios from 'axios';
import { startLoading, setFilms } from './homeSlice';

export const fetchPopularMovies = () => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9ebbf65c80c0e6ee15f83825a6422dd5`
      );

      dispatch(setFilms({ films: response.data.results }));
    } catch (error) {
      console.error('Error fetching popular movies:', error);
      dispatch(startLoading());
    }
  };
};
