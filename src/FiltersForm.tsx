import React from 'react';
import { ReactElement } from 'react';
import './App.scss';
import { movies } from './movieData'
import { Movie } from './movieData';
import AllFiltersModal from './components/FiltersForm/AllFiltersModal';
import { Provider } from 'react-redux';
import store from './state/FiltersFormStore/filterform-store';
import SubmitButton from './components/FiltersForm/SubmitButton';
import Checkbox from './components/FiltersForm/CheckBox';

function App() {

  //Selector Here
  return (
    <Provider store={store}>
      <SubmitButton />
      <Checkbox />
      <AllFiltersModal />
    </Provider>
  );
};

export default App;
