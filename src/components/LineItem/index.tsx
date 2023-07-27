import React from 'react';
import './lineItem.css';
import { Movie } from '../../movieData'

interface LineItemProps {
    movie: Movie;
}

const LineItem: React.FC<LineItemProps> = ( {movie} ) => {
  return (
    <div className="lineItemContainer">
      <h3>{movie.title}</h3>
      <p>Genre: {movie.genre}</p>
      <p>Length: {movie.length} minutes</p>
      <p>Release Date: {movie.releaseDate}</p>
      <hr />
    </div>
  );
};

export default LineItem;
