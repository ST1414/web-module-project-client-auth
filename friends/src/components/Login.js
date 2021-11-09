import React, { useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const initialCredentials = { username:'', password:'' };

const Login = () => {

    const [ credentials, setCredentials ] = useLocalStorage('credentials', initialCredentials);
    const [ isLoading, setIsLoading ] = useState(false);

    const handleChange = e => {
        console.log('Login - Handle Change')
        console.log(e.target.name, ' ', e.target.value);
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        console.log('Login - Form Submit', e.target.name, e.target.value)
    }

    return (
        <div className='login'>
            <h1>Log In Page</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' value={credentials.username} onChange={handleChange} /><br/>
                <input type='text' name='password' value={credentials.password} onChange={handleChange} /><br/>
                <button>Log In</button>
            </form>
        </div>
    )

}

export default Login;
