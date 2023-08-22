import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {PersistGate} from "redux-persist/integration/react";
import persistStore from 'redux-persist/es/persistStore';
import store from './store';

const persistedStore = persistStore(store);


const reactRoot = createRoot(document.getElementById('root'));

reactRoot.render(
    <React.StrictMode>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistedStore}>
            <App />
        </PersistGate>
    </Provider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();