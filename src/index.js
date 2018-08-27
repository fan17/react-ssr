import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import AppContainer from './app/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

const APP_STATE = window && window.APP_STATE ? {...window.APP_STATE} : null;

const store = APP_STATE ? createStore(reducers, APP_STATE) : createStore(reducers);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
registerServiceWorker();
