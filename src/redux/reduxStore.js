import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messagesReducer from './messagesReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    navbarPage: navbarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

export default store;