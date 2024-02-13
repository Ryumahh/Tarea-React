import axios from 'axios';
import { startLoading, setResults } from './filmSearchSlice';

export const searchFilms = (query) => {
  return async (dispatch) => {
    dispatch(startLoading());

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=9ebbf65c80c0e6ee15f83825a6422dd5&language=en-US&query=${query}&page=1&include_adult=false`
      );

      dispatch(setResults({ results: response.data.results }));
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };
};
