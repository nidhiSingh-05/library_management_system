import React from 'react'
import { Link } from 'react-router-dom';

function Logout(props) {
    const logout=(e)=>{
        e.preventDefault();
        if(localStorage.getItem("user"))
        {
            localStorage.removeItem("user");
        }
        props.history.push('/login');
    }
    
    return (
        <div>
             {/* <button type='button' className='btn btn-primary ' onClick={(e)=>logout(e)}>Logout</button> */}
             {/* <Link className="btn btn-success mr-2" to={'/login'}>Logout</Link> */}
        </div>
    )
}

export default Logout
