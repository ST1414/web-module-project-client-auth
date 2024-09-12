// COPY / PASTE FROM WALK THROUGH

import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import axiosWithAuth from "../utils/axiosWithAuth";

const Logout = (props)=> {
    const { push } = useHistory();

    useEffect(()=> {
        const token = localStorage.getItem("token");

        axiosWithAuth()
            .post('/logout')
            .then( response => {
                localStorage.removeItem('token');
                push('/login');
            });
    }, []);
    
    return(<div></div>);
}

export default Logout;