import {
    GET_TODOS,
    GET_TODOS_FAIL,
    GET_TODO_BY_ID,
    GET_TODO_BY_ID_FAIL,
    ADD_TODO,
    DELETE_TODO_ITEM,
    UPDATE_TODO_ITEM,
    LOADING_TODOS,
    LOADING_TODO_ITEM
} from '../actions/todoTypes';


const initialState = {
    todos: [],
    todoItem: [],
    loadingTodos: false,
    loadingTodoItem: false,
};


export default function todoReducer (state = initialState, action){
    const { type, payload } = action;
    switch(type) {
        case GET_TODOS:
            return {
                ...state,
                todos: payload,
                //loadingTodos: false
            }
        case GET_TODOS_FAIL:
            return{
                ...state,
                todos: [],
                loadingTodos: true
            }
        case GET_TODO_BY_ID:
            return{
                ...state,
                todoItem: payload,
                loadingTodoItem: false
            }
        case GET_TODO_BY_ID_FAIL:
            return{
                ...state,
                loadingTodoItem: false
            }
        case ADD_TODO:
            return{
                ...state,
                loadingTodoItem: false
            }
        case UPDATE_TODO_ITEM:
            return{
                ...state,
                loadingTodoItem: false
            }
        case DELETE_TODO_ITEM:  
            return{
                ...state,
                todos: payload,
                loadingTodoItem: false

            }
        case LOADING_TODOS:
            return{
                ...state,
                loadingTodos: true
            }
        case LOADING_TODO_ITEM:
            return{
                ...state,
                loadingTodoItem: true
            }
        default:
            return state
    }
}