import { fetchFilmDetails, setFilmDetails, setFilmDetailsLoading, setFilmDetailsError } from './filmDetailsSlice';

export const loadFilmDetails = (id) => async (dispatch) => {
  dispatch(setFilmDetailsLoading());
  try {
    const response = await dispatch(fetchFilmDetails(id));
    if (fetchFilmDetails.fulfilled.match(response)) {
      dispatch(setFilmDetails(response.payload));
    } else if (fetchFilmDetails.rejected.match(response)) {
      dispatch(setFilmDetailsError(response.payload));
    }
  } catch (error) {
    console.error('Error loading film details:', error);
    dispatch(setFilmDetailsError('No se pudieron cargar los detalles de la película'));
  }
};
