import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import { Form } from '@edx/paragon';
import store from './state/FiltersFormStore/filterform-store';
import OpenModalButton from './components/FiltersForm/OpenModalButton';
import AllFiltersModal from './components/FiltersForm/AllFiltersModal';
//import SubmitButton from './components/FiltersForm/SubmitButton';
import AllFilters from './components/FiltersForm/AllFilters/allfilters';

function App() {

  //Selector Here
  return (
    <Provider store={store}>
      <OpenModalButton title="Open Modal" />
      <AllFiltersModal />
      <AllFilters />
    </Provider>
  );
}

export default App;
