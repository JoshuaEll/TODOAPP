import axios from 'axios';
import {
    GET_TODOS,
    GET_TODOS_FAIL,
    GET_TODO_BY_ID, 
    ADD_TODO,
    UPDATE_TODO_ITEM,
    DELETE_TODO_ITEM,
    LOADING_TODOS,
    LOADING_TODO_ITEM
} from './todoTypes';
import {
    AUTHENTICATED_FAIL
} from './types'


export const getToDo = () => async dispatch =>{
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`
            }
        };
        try {

            const res = await axios.get(`${process.env.REACT_APP_API_URL}/todo/`, config)
            return(
                dispatch({
                        type: GET_TODOS,
                        payload: res.data
                    })
            );
        } catch (error) {
            dispatch({
                type: GET_TODOS_FAIL
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const addTodo = (title, description) => async dispatch =>{
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        };
        const body = JSON.stringify({ title, description});

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/todo/`, body, config);
            dispatch({
                type: ADD_TODO,
                payload: res.data
            });

        } catch (error) {
           
        }
    } else{
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const updateTodo = (id, value) => async dispatch =>{
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        };

        const completed = value;
        const body = JSON.stringify({completed})
        try {

            const res = await axios.patch(`${process.env.REACT_APP_API_URL}/todo/${id}/`, body, config)
            dispatch({
                    type: UPDATE_TODO_ITEM,
                    payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};

export const deleteTodo = (id) => async dispatch =>{
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Authorization': `JWT ${localStorage.getItem('access')}`,
            }
        };
        try {
            
            const res = await axios.delete(`${process.env.REACT_APP_API_URL}/todo/${id}/`, config)
            dispatch({
                    type: DELETE_TODO_ITEM,
                    payload: res.data
            });
        } catch (error) {
            dispatch({
                type: AUTHENTICATED_FAIL
            });
        }
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        });
    }
};