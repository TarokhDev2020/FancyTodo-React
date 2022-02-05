import {ADD_TODO, GET_TODOS, COMPLETE_TODO, SET_LOADING, TODO_ERROR} from './types';

export const setLoading = () => {
    return {
        type: SET_LOADING
    }
};

export const getTodos = () => async dispatch => {
    try {
        setLoading();
        const response = await fetch('http://localhost:5001/todos', {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: GET_TODOS,
            payload: data
        })
    }
    catch (e) {
        console.log(e);
        dispatch({
            type: TODO_ERROR,
            payload: e
        })
    }
};

export const addTodo = todo => async dispatch => {
    try {
        setLoading();
        const response = await fetch('http://localhost:5001/todos', {
            method: "POST",
            body: JSON.stringify(todo),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        dispatch({
            type: ADD_TODO,
            payload: data
        })
    }
    catch (e) {
        dispatch({
            type: TODO_ERROR,
            payload: e
        })
    }
};

export const completeTodo = id => async dispatch => {
    try {
        setLoading();
        await fetch(`http://localhost:5001/todos/${id}`, {
            method: "DELETE"
        });
        dispatch({
            type: COMPLETE_TODO,
            payload: id
        })
    }
    catch (e) {
        dispatch({
            type: TODO_ERROR,
            payload: e
        })
    }
}



