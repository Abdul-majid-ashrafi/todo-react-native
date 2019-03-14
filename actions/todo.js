import { ADD_TODO, DELETE_TODO } from './types';

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: {
            text: todo.text,
            color: todo.color,
            time: todo.time,
        }
    }
}

export const deleteTodo = todos => {
    return {
        type: DELETE_TODO,
        payload: todos
    }
}