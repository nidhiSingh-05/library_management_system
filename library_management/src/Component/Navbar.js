import React from 'react'
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom'
import Student from './Book'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import FristPage from './FristPage'
import IssueBook from './IssueBook'
import Book from './Book'
import MyBook from './MyBook'
import AdminEditBook from './AdminEditBook'
import FineInfo from './FineInfo'
import Logout from './Logout'

const Navbar = () => {
  let active = JSON.parse(sessionStorage.getItem('ActiveUser')) 
  if(active == null)
  {
    active={status:false}
    sessionStorage.setItem('ActiveUser',JSON.stringify(active))
  }
  return (
    <BrowserRouter>
      <nav className ="nav-Wrapper" style={{backgroundColor:'blue'}}>
        <div className="container">
          <h5 className="left">LIBRARY MANAGEMENT SYSTEM</h5>
          <ul className="right">
        
            {
              active.Status ?
              <>
             <li><NavLink to="/book">Book</NavLink></li>
            <li><NavLink to="/logout">Logout</NavLink></li> 
            <li><NavLink to="/mybook">MyBook</NavLink></li>
            </>
            :
            <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li> 
            </>
            }
          </ul>
        </div>
      </nav>
      <Switch>
      {/* <Route exact path="/admin" component={Admin}/> */}
      <Route exact path="/" component={FristPage}/>
      <Route  path="/mybook" component={MyBook}/>
      <Route  path="/book" component={Book}/>
      <Route  path="/login" component={Login}/>
      <Route  path="/logout" component={Logout}/>
      <Route  path="/register" component={Register}/>
      <Route  path="/home" component={Home}/>
      <Route  path="/issueBook/:bookId" component={IssueBook}/>
      <Route  path="/adminEditBook/:bookId" component={AdminEditBook}/>
      <Route  path="/fineInfo/:bookId" component={FineInfo}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Navbar




