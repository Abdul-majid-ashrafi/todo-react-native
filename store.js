// store.js

import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';

const rootReducer = combineReducers({
    todoList: todoReducer
});

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;