import React from 'react'

import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function LogoutButton() {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try{

            const response = await axios.get('http://localhost:8080/logout');
            if(response.data.status === 'success'){
                localStorage.removeItem('user');
    
                navigate('/');
            }
        }catch(error){
            alert('logout failed', error);
        }
    }

  return (
    <div>
        <button className='btn btn-danger' onClick={handleLogout}>logout</button>
    </div>
  )
}

export default LogoutButton