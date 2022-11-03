import React, { useEffect, useState } from 'react';
import { getToDo} from "../actions/todoActions"
import { connect } from 'react-redux';
import { updateTodo } from '../actions/todoActions';
import { deleteTodo } from '../actions/todoActions';
import ListGroup from 'react-bootstrap/ListGroup';
import { MdDelete, MdEdit} from "react-icons/md"


// ADD EDIT AND CHECK BOX  Watch https://www.youtube.com/watch?v=OSYAjTG46EI


const TodoList = ({getToDo, deleteTodo,updateTodo, todos}) => {
 
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = (id, completed) => {
        updateTodo(id, !completed)
        window.location.replace('/')
    };

    function handleDelete(id){
        deleteTodo(id)
        window.location.replace('/')
        
    }
    useEffect(()=>{
        getToDo()
    },[]);

    const renderListGroupItem = (t) =>{
        return(
        <ListGroup.Item key={t.id} className="d-flex justify-content-between align-items-start">
                <div className="d-flex justify-content-center">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" checked= {isChecked} name='completed' onChange={()=> handleOnChange(t.id, t.completed)} /> 

                    <div className="ms-2 me-auto">
                        <div className='fw-bold'>
                            {t.title}
                        </div>
                        <span className='fw-bold'>Description:</span> {t.description}
                    </div>
                    </div>
                </div>
                    <MdDelete style={{cursor: "pointer"}} onClick={() => handleDelete(t.id)} />
                </ListGroup.Item>
        )
    };


    const completeTodos = todos.filter(t => t.completed === true) 
    const incompleteTodos = todos.filter(t => t.completed === false) 
    return(
        <div>   
            <div className="mb-2 mt-4">
                Incomplete Todos ({incompleteTodos.length})
            </div>     
            <ListGroup>
                {incompleteTodos.map(renderListGroupItem)}
            </ListGroup>
            <div className="mb-2 mt-4">
                Completed Todos ({completeTodos.length})
            </div>
            <ListGroup>
                {completeTodos.map(renderListGroupItem)}
            </ListGroup>
    </div>

    )
};

const mapStateToProps = state => {
    return {
        todos: state.todoReducer.todos
    }
}
export default connect(mapStateToProps, {getToDo, deleteTodo, updateTodo})(TodoList);