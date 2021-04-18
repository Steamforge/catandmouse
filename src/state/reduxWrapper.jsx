import React from 'react';

import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from '.';

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

const provider = ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
);

export default provider;
