import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Home = ({ isAuthenticated }) => {
    const guestLinks = () => (
        <>
            <div className="bg-secondary p-5 rounded-lg m-3">
                <h1 className="display-4">Welcome to ToDo App</h1>
                <p className="lead">This is a simple todo application with user registration.</p>
                <hr className="my-4" />
                <p>Click the Log In button to continue</p>
                <Link className="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
            </div>
        </>
    );

    const authLinks = () => (
    <>
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className='home--h1'>ToDo-List</h1>
            <AddTodo/>
            <TodoList/>
        </div>
    </>
    );
    return(
        <div className="container">
            {isAuthenticated ? authLinks() : guestLinks()}
            
        </div>
    );
    
    
    
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, null) (Home);