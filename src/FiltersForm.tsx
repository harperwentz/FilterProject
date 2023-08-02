import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './state/FiltersFormStore/filterform-store';
import OpenModalButton from './components/FiltersForm/OpenModalButton';
import AllFiltersModal from './components/FiltersForm/AllFiltersModal';
import Checkbox from './components/FiltersForm/CheckBox';

function App() {
  return (
    <Provider store={store}>
      <OpenModalButton title="Open Modal" />
      <AllFiltersModal title="All Filters" />
      <Checkbox title="google" />
    </Provider>
  );
}

export default App;
