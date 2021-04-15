import React, { Component } from 'react';
//import './App.css';
import Navbar from './Component/Navbar';
//import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Component/Home';
import Login from './Component/Login';
import Admin from './Component/Admin';

class App extends Component {
  render() {
    return (
     
      <div className="App">
      {/* <h1 style={{color:"red", textAlign:"center"}}>WELCOME TO LIBRARY MANAGEMENT SYSTEM</h1> */}
        <Navbar/>
        {/* <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/admin" component={Admin}/>
        </Switch> */}
      </div>
    
    );
  }
}
export default App;



// import React from 'react'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './App.css';
// import Navbar from './Component/Navbar';
// import Home from './Component/Home';
// import Login from './Component/Login';
// import Register from './Component/Register';
// import Admin from './Component/Admin';


// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Router>
//         <Route path="/" exact render={()=> <Home />}/>
//         <Route path="/login" exact render={()=> <Login />}/>
//         <Route path="/register" exact render={()=> <Register />}/>
//         <Route path="/admin" exact render={()=> <Admin />}/>
//       </Router>
//     </div>
//   )
// }

// export default App






// import logo from './logo.svg';
// import './App.css';
// import React from 'react'
// import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navbar from './Component/Navbar';
// import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
// import Home from './Component/Home';
// import Login from './Component/Login';
// import Register from './Component/Register';
// import Admin from './Component/Admin';
// import Student from './Component/Student';


// function App() {
//   return (
//     <Router>
//     <div className="App">
//       <Navbar/>
//       <Switch>
//         <Route exact path="/" component={Home}/>
//         <Route exact path="/" component={Login}/>
//         <Route exact path="/" component={Register}/>
//         <Route exact path="/" component={Admin}/>
//         <Route exact path="/" component={Student}/>

//       </Switch>
//     </div>
//     </Router>
//   )
// }

// export default App

