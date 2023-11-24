import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userSlice from './features/userSlice';
import createSagaMiddleware from 'redux-saga'
import catSaga from './saga/catSaga';
import catAPISlice from './features/catAPISlice';

const saga = createSagaMiddleware();

const store = configureStore(
  {
    reducer: {
      user: userSlice,
      cats: catAPISlice,
    },
    middleware: [saga]
  }
)
saga.run(catSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

