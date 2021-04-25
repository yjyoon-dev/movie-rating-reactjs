import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <p className="movie_summary">{summary.slice(0, 180)}</p>
        <ul className="movie__genres">
          {genres.map((genre, index) => (
            <li key={index} className="movie__genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
