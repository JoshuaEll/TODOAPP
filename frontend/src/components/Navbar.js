import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../actions/auth';
import { connect } from 'react-redux';

const Navbar = ({ logout, isAuthenticated }) => {
    const guestLinks = () => (
        <>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/register">Register</Link>
            </li>
        </>
    );

    const authLinks = () => (
        <>
            <li className="nav-item">
                <Link className="nav-link" to='/' onClick={logout}>Logout</Link>
            </li>
        </>
    );
    
    return (
    
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border">
            <Link className="navbar-brand" to="/"> ToDo App</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {isAuthenticated ? authLinks() : guestLinks()}
                </ul>
            </div>
        </nav>

        );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(Navbar);