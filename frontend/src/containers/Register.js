import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { register } from '../actions/auth';

const Register = ({ register, isAuthenticated }) => {
   
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        user_name: '',
        password: '',
        re_password: ''
    })

    const { email, user_name, password, re_password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name] :  e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (password === re_password){
            register(email, user_name, password, re_password)
            setAccountCreated(true);
        }
        
    };

    //is the user authenticated?
    // redirect user to home page
    if (isAuthenticated){
       return <Navigate to='/' />
    }
    if (accountCreated){
        return <Navigate to='/login' />
    }
    return(
        <div className='container mt-5'>
            <h1>Register</h1>
            <p>Create your Account</p>
            <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                    <input className='form-control' type='email' placeholder='Email*' name='email' value={email} onChange={e => onChange(e)} required/>
                </div>
                <div className='form-group'>
                    <input className='form-control' type='text' placeholder='Username*' name='user_name' value={user_name} onChange={e => onChange(e)} required/>
                </div>
                <div>
                <input className='form-control' type='password' placeholder='Password*' name='password' value={password} onChange={e => onChange(e)} minLength='6' required/>
                </div>
                <div>
                <input className='form-control' type='password' placeholder='Repeat Password*' name='re_password' value={re_password} onChange={e => onChange(e)} minLength='6' required/>
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
            <p className='mt-3'>
                Already have an Account? <Link to='/login'>Login</Link>
            </p>
        </div>
    )
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { register })(Register);