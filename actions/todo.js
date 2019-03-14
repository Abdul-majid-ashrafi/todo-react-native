import { ADD_TODO } from './types';

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