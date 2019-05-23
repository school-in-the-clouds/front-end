import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux'
import store from './store'

import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

const engine = new Styletron();

ReactDOM.render(
<ReduxProvider store={store}>
    <Router>
        <StyletronProvider value={engine}>
            <App />
        </StyletronProvider>
    </Router>
</ReduxProvider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
