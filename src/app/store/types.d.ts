declare module 'redux-store' {
    import  RootReducer from '../reducers/rootReducer';
    import {Action} from '../reducers/actionTypes';
    export type RootState = ReturnType<ReturnType <typeof RootReducer>>;
    export type RootAction = Action;
}