import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss'
import App from './App';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit';
import noteS from './slices/note';
import rootSaga from './sagas';
import category from './slices/category';


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: { note: noteS,
  category},
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(rootSaga)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals