import express from 'express';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers, { initialState } from '../reducers';

import Html from './Html';
import AppContainer from '../app/AppContainer';

const app = express();

app.use(express.static(path.join(__dirname)));

app.get('*', async (req, res, next) => {
    const scripts = ['vendor.js', 'client.js'];

    const serverState = { 
        ...initialState,
        title: 'rendered on the server' 
    };
    const store = createStore(reducers, serverState);

    const appMarkup = ReactDOMServer.renderToString(
        <Provider store={store}>
            <AppContainer />
        </Provider>,
    );
    const html = ReactDOMServer.renderToStaticMarkup(
        <Html
            children={appMarkup}
            scripts={scripts}
            initialState={serverState}
        />,
    );

    res.send(`<!doctype html>${html}`);
});

app.listen(3005, () => console.log('Listening on localhost:3005'));
