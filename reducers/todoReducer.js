// todoReducer.js

import { ADD_TODO, DELETE_TODO, LOGOUT } from '../actions/types';

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
                    value: action.payload.text,
                    color: action.payload.color,
                    time: action.payload.time,
                })
            };
        case DELETE_TODO:
            // const todoList = state.todoList;
            return state = {
                todoList : new Array().concat(action.payload)
            };
        case LOGOUT:
            return state = {
                todoList: [],
            }
        default:
            return state;
    }
}

export default todoReducer;