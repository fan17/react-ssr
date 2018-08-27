import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers, { initialState } from './reducers';
import AppContainer from './app/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';


const APP_STATE = window && window.APP_STATE ? {...window.APP_STATE} : initialState;

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, APP_STATE, composeEnhancers(applyMiddleware(...middleware)));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
);
registerServiceWorker();
