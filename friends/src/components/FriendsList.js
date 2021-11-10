import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Link } from 'react-router-dom';
import AddFriend from './AddFriend';


const FriendsList = () => {
    
    const [ friends, setFriends ] = useState([]);

    useEffect( () => {
        axiosWithAuth().get('/friends')
            .then( response => {
                setFriends(response.data)
            })
            .catch( error => {
                console.log(error);
            })
    }, [])
    
    return (
        <div className="friends-list">
            <Link to="/addfriend">Add a Friend</Link>
            <h2>Your Friends...</h2>
            {friends.map( friend => {
                return <p key={friend.id}><span bold='true'>Name:</span> {friend.name}, Age: {friend.age}, Email: {friend.email}</p>
            })}
        </div>
    )
}

export default FriendsList;