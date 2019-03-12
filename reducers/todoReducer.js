// todoReducer.js

import { ADD_TODO } from '../actions/types';

const initialState = {
    todoList: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return state = {
                // places: [...state.places, { value: action.payload }]
                ...state,
                todoList: state.todoList.concat({
                    key: Math.random(),
                    value: action.payload
                })
            };
        default:
            return state;
    }
}

export default todoReducer;