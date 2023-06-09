import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import Reducer from './Reducer';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';

const persistConfig = {
  key:"persist-key",
  storage
}
const persistedReducer = persistReducer(persistConfig,Reducer);
const store = configureStore({
  reducer:{
     users:persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false
    })
})
const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
