
import React from 'react';
import { Calculator } from './src/calculator';
import calculatorReducer from './src/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(calculatorReducer);

const App = () => {
  return (
    <Provider store={store}>
    <Calculator />
    </Provider>
  );
};

export default App;
