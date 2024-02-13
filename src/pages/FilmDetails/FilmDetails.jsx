import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { loadFilmDetails } from '../../slices/filmDetailsThunks';
import { setFilmDetails, setFilmDetailsLoading, setFilmDetailsError } from '../../slices/filmDetailsSlice';

function FilmDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { details, loading, error } = useSelector((state) => state.filmDetails);

  useEffect(() => {
    dispatch(loadFilmDetails(id));

    return () => {
      dispatch(setFilmDetails(null));
    };
  }, [dispatch, id]);
  
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 text-center">
        Detalles de la película: {details && details.title} ({details && details.release_date && details.release_date.substring(0, 4)})
      </h1>
      <h1 className="text-2xl font-bold mb-2">Valoración: {details && details.vote_average}/10</h1>

      <div className="container mx-auto p-4 text-center flex items-center">
        <div className="w-1/2 pr-8">
          {error && (
            <p className="text-red-500 font-bold">{error}</p>
          )}
          {details && !error && (
            <div className="mt-1">
              <img
                src={`https://image.tmdb.org/t/p/w500${details.poster_path}`}
                alt={details.title}
                className="mx-auto max-w-full h-auto scale-75 transform"
              />
            </div>
          )}
        </div>

        {details && !error && (
          <div className="w-1/2">
            <h1 className="text-2xl font-bold mb-2">Sinopsis:</h1>
            <p className="text-white">{details.overview}</p>

            <div className="flex flex-col justify-between h-full">

              <div>
                <h2 className="text-xl font-bold mt-7">Géneros:</h2>
                <ul>
                  {details.genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                  ))}
                </ul>
              </div>

              <br/>
              <Link to={`/ReservaPage/${id}`} className="bg-yellow-500 hover:bg-yellow-600/90 text-white font-bold py-2 px-4 rounded">
                Reservar
              </Link>
            </div>
          </div>
        )}
      </div>

      

      <br/><br/>

      
      
    </div>
  );
}

export default FilmDetails;
