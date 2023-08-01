import React from 'react';
import { useDispatch, useSelector, Provider } from 'react-redux';
import './lineItem.css';
import { Movie } from '../../movieData'
import { addCategories, setCategory, toggleOption, clearForm } from '../FiltersForm/FilterFormsStore/filter-actions';
import { selectCategoryByName, selectNumOptionsSelected, selectOptionsForCategory } from '../FiltersForm/FilterFormsStore/filter-selectors';
import { FormInputObject } from '../FiltersForm/FilterFormsStore/types'

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
