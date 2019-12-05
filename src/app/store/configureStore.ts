import { Store, createStore, applyMiddleware } from'redux';
import { RootState, RootAction } from 'redux-store';
import { History } from "history";
import {routerMiddleware} from 'connected-react-router';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';

const configureStore = (history: History):Store<RootState, RootAction> => {
    const store = createStore(
        rootReducer(history),
        composeWithDevTools({trace:false})(applyMiddleware(routerMiddleware(history), thunk))
    );
    return store;
}

export default configureStore;