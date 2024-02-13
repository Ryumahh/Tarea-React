import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function FilmPoster({ id, title, poster_path: posterUrl }) {
  const textStyle = { textShadow: "2px -1px 7px black" };

  if (!posterUrl) {
    return (
      <div>
        <p>Error al cargar la imagen del póster</p>
      </div>
    );
  }

  return (
    <Link to={`/filmDetails/${id}`} className="relative overflow-hidden transition-transform duration-300 ease-out transform hover:scale-110">
      <div className="h-full relative shadow-2xl shadow-purple-300 overflow-hidden group">
        <img alt={title} title={title} src={`https://image.tmdb.org/t/p/w500${posterUrl}`} className="w-full z-0 h-full object-fill example" />
        <div className="absolute left-0 bottom-0 w-full bg-black/60">
          <p className="text-lg font-rubiksh font-extrabold text-white" style={textStyle}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default FilmPoster;
