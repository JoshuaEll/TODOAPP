import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
    <div className="container">
        <div className="bg-light p-5 rounded-lg m-3">
            <h1 className="display-4">Welcome to ToDo App</h1>
            <p className="lead">This is a simple todo application with user registration.</p>
            <hr className="my-4" />
            <p>Click the Log In button to continue</p>
            <Link className="btn btn-primary btn-lg" to='/login' role="button">Login</Link>
        </div>
    </div>
);

export default Home;