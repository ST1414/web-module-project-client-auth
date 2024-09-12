
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axiosWithAuth from '../utils/axiosWithAuth';

const initialFriend = {name:'', age:'', email:'' };

const AddFriend = () => {
    const [ friend, setFriend ] = useState(initialFriend);
    const history = useHistory ();

    const handleChange = (e) => {
        setFriend({
            ...friend,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth().post('/friends', friend)
            .then( response => {
                history.push('/friendslist');
            })
            .catch( error => {
                console.log(error)
            })
    }

    return (
        <div className='add-friend'>
            <h2>Add a Friend to Your List...</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' name='name' value={friend.name} onChange={handleChange} placeholder='Enter Name' /><br/>
                <input type='text' name='age' value={friend.age} onChange={handleChange} placeholder='Enter Age'/><br/>
                <input type='email' name='email' value={friend.email} onChange={handleChange} placeholder='Enter Email'/><br/>
                <button>Add Friend</button>
            </form>
        </div>
    )

}

export default AddFriend;
