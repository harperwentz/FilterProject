import React from 'react';
import logo from './logo.svg';
import Checkbox from './components/FiltersForm/CheckBox';
//import store from './store';
import { ReactElement } from 'react';
import './App.css';
import LineItem from './components/LineItem'
import { movies } from './movieData'
import { Movie } from './movieData';
import InputGroup from './components/FiltersForm/InputGroup';
import { Provider } from 'react-redux';
import store from './components/FiltersForm/FilterFormsStore/filterform-store';


function App() {
  return (
  <Provider store={store}>
    <div>
    <div>
      <InputGroup category="Category"/>
    </div>
    <div>
      {movies.map((movie: Movie) : ReactElement => (
        <LineItem movie={movie}/>
        ))}
    </div>
    </div>
  </Provider>
  );
};

export default App;
