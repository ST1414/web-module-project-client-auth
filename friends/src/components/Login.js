import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

const initialCredentials = { username:'', password:'', token: '' };

const Login = () => {

    const [ credentials, setCredentials ] = useState(initialCredentials);
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsLoading(true);
        axios.post('http://localhost:5000/api/login', credentials)
            .then( response => {
                localStorage.setItem('token', response.data.payload);
                history.push('/friendslist')

            })
            .catch( error => {
                console.log(error)
            })
            .finally(setIsLoading(false));
    }

    

    return (
        <div className='login'>
            <h1>Log In Page</h1>
            {isLoading === true && <h4>*** Please wait, we are getting your friends *** </h4>}
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' value={credentials.username} onChange={handleChange} /><br/>
                <input type='password' name='password' value={credentials.password} onChange={handleChange} /><br/>
                <button>Log In</button>
            </form>
        </div>
    )

}

export default Login;
