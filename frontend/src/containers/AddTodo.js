import React, { Component, useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';


const AddTodo = ({addTodo}) => {

    var completed = false;
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    
    const { title, description } = formData;
    const onChange = e => setFormData({ ...formData, 
        [e.target.name] :  e.target.value,
    });

    const onSubmit = ev => {
        ev.preventDefault();
        addTodo(title, description);
        window.location.replace('/')
    };
        
    return(
            <div className='todo--container bg-light'>
                <form onSubmit={ev => onSubmit(ev)}>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='Title' name='title' value={title} onChange={e => onChange(e)} required />
                    </div>
                    <div className='form-group'>
                        <input className='form-control' type='text' placeholder='Description' name='description' value={description} onChange={e => onChange(e)} />
                    </div>
                    <button className='btn add--btn btn-primary' type='submit'>Submit</button>
                </form>
            </div>
        )

};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(null, { addTodo })(AddTodo);