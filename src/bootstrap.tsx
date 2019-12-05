import React from 'react';
import ReactDOM from 'react-dom';
import {createHashHistory} from 'history';
import configureStore from './app/store/configureStore';
import Root from './Root';
import { noRootMsg } from './constants';

const renderApp = () => {
    const rootElement = document.getElementById('root');
    if (rootElement === null) {
        throw new Error(noRootMsg)
    }
    const history = createHashHistory();
    const store = configureStore(history);
    ReactDOM.render(<Root store={store} history={history} />, rootElement);
}

renderApp();