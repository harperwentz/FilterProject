import React from 'react';
import { ReactElement } from 'react';
import './App.css';
import { movies } from './movieData'
import { Movie } from './movieData';
import AllFiltersModal from './components/FiltersForm/AllFiltersModal';
import { Provider } from 'react-redux';
import store from './state/FiltersFormStore/filterform-store';



function App() {
  return (
  <Provider store={store}>
    <div>
    <div>
      <AllFiltersModal />
    </div>
    <div>
      {movies.map((movie: Movie): ReactElement => (
        <h1>{movie.title}</h1>
        ))}
    </div>
    </div>
  </Provider>
  );
};

export default App;