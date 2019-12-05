import React from 'react';
import { Store } from 'redux';
import { RootState, RootAction} from 'redux-store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './app/App';

type Props = {
    store :Store<RootState, RootAction>;
    history: History;
}

const Root = ({ store, history}: Props) => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
)

export default Root;