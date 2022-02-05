import {ADD_TODO, GET_TODOS, COMPLETE_TODO, SET_LOADING, TODO_ERROR} from '../actions/types';

const initialState = {
    todos: [],
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch (action.type) {

        case SET_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TODOS:
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
            
        case TODO_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }
            
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: false
            }
            
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
                loading: false
            }    

        default:
            return state
    }
}