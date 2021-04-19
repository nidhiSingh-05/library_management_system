import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, useHistory } from 'react-router-dom'
function Logout() {
    let history = useHistory()
    sessionStorage.removeItem("ActiveUser");
    let Active = JSON.parse(sessionStorage.getItem('ActiveUser'))
    if (Active == null) {
        Active = { Status: false }
        sessionStorage.setItem('ActiveUser', JSON.stringify(Active))
    }

    useEffect(()=>{
        window.location.reload()
      },[])

    return (
        <div>
           
            {/* {history.push('/')} */}
            <Redirect to='/' />
        </div>
    )
}

export default Logout



// import React from 'react'
// import { Link } from 'react-router-dom';

// function Logout(props) {
//     const logout=(e)=>{
//         e.preventDefault();
//         if(localStorage.getItem("user"))
//         {
//             localStorage.removeItem("user");
//         }
//         props.history.push('/login');
//     }
    
//     return (
//         <div>
//              {/* <button type='button' className='btn btn-primary ' onClick={(e)=>logout(e)}>Logout</button> */}
//              {/* <Link className="btn btn-success mr-2" to={'/login'}>Logout</Link> */}
//         </div>
//     )
// }

// export default Logout
