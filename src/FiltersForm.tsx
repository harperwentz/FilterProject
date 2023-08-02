import React from 'react';
import './App.scss';
import { Provider } from 'react-redux';
import store from './state/FiltersFormStore/filterform-store';
import AllFiltersModal from './components/FiltersForm/AllFiltersModal';

function App() {
  return (
    <Provider store={store}>
      <AllFiltersModal title="All Filters" />
    </Provider>
  );
}

export default App;
