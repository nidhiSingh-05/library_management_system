import axios from 'axios';
import React, { useEffect, useState } from 'react'


function Login(props) {

    const [userName,setUserName] = useState('');
    const [cur_password,setPassword] = useState('');
    const[ isLoggedIn ,setIsLoggedIn]= useState('')

   //  const [errorMessage,setErrorMessage] = useState('');
   const [user,setUser] = useState([]);
   const [id,setId] = useState(null);
   const [flag,setFlag] = useState(false);
   const [member,setMember] = useState(''); 

   useEffect(()=>{
       axios.get('http://localhost:3001/user').then((response)=>{
           console.log(response);
           setUser(response.data);
       }).catch((err)=>{
           console.log(err);
       });
   },[]);

   
    const login =(e)=>{
        e.preventDefault();

            user.map((u,i)=>{
                if(u.userName == userName && u.password == cur_password){
                    setId(u.id);
                    console.log("id : " + id);
                    setMember(u.userName);
                    console.log("id : " + member);
                    setFlag(true);
                }
               // console.log("id : " + id);
            });
            
            let active = JSON.parse(sessionStorage.getItem('activeUser'))||{};
            // if(active == null){
            //     active ={}
            //  }
            let obj = {userName:member,password:cur_password,status:true}
            console.log(obj)
            // active =obj;
            sessionStorage.setItem('activeUser',JSON.stringify(obj));
            if(userName.length ===" " || cur_password.length === "")
            {
                alert('Enter UserName and password');
            }
            else if(userName === "admin" && cur_password ==="admin@123")
            {
                alert('Welcome admin');
                props.history.push('/home');
            }
            else{
                axios.post("http://localhost:3001/login",{userName:userName,password:cur_password,}
                ).then((response)=>{
                    if(response.data.message)
                    {
                        setIsLoggedIn(response.data.message)
                    }
                    else
                    {
                      setIsLoggedIn(response.data.username);
                      console.log(response.data.username);
                      props.history.push('/book')  
                         }
                       
                    })
                }
                    
            }
    //     if(userName === "admin" && password ==="admin@123")
    //     {
    //         alert('welcome admin');
    //         props.history.push('/home');
            
    //     }
    //     else
    //     {
    //         props.history.push('/book');
    //     }
    //     axios.post("http://localhost:3001/login",{userName:userName,password:password,}).then((response)=>{
    //        // console.log(response.data);
    //       if(response.data.loggedIn){
    //           localStorage.setItem("loggedIn",true);
    //           localStorage.setItem("username",response.data.userName);
    //           props.history.push('/register');
            
              
    //       }
    //       else{
    //           setErrorMessage(response.data.message);
              
    //       }
    //     })
    // };
    // props.history.push('/register');
    return (
        <div className="container center from-group">
            <center>
            <h3 style={{color:"red"}}>Login</h3>
            <div className="row">
                <from autoComplete="off" className="m-5 col-md-10">
                    <div className="row">
                        <div className="input-field col s12 mr-2">
                           <input type="text" placeholder="UserName...." 
                           className='form-control validate' 
                          onChange={(e)=>setUserName(e.target.value)}/>
                          
                           
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12 mr-2">
                           <input type="password" placeholder="Password...." 
                           className='form-control validate'
                           onChange={(e)=>setPassword(e.target.value)}/>
                           
                           
                        </div>
                    </div>
                    <button  className='btn btn-primary mr-2' onClick={(e)=>login(e)}>Login</button>
                    <p>Create Account for newUser ?? <a href="/register">Register Now</a></p>
            </from>
            </div>
            </center> 
           <h3>{isLoggedIn}</h3>
        </div>
    )
}

export default Login






// import axios from 'axios';
// import React from 'react';
// //import '../style.css';


// class Login extends React.Component 
// {
//     constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }

//       this.handleChange = this.handleChange.bind(this);
//       this.submituserLoginForm = this.submituserLoginForm.bind(this);

//     };

//     handleChange(e) {
//       let fields = this.state.fields;
//       fields[e.target.name] = e.target.value;
//       this.setState({ 
//         fields
//       });

//     }

   

//     submituserLoginForm(e) {
//       e.preventDefault();
//       if (this.validateForm()) {
//           let fields = {};
//           fields["userName"] = "";
//           fields["password"] = "";
          
//           this.setState({fields:fields});
//           alert("Login Successfully....!!!");

//             axios.post('http://localhost:3001/login',{
//                 userName:this.state.fields.userName,
//                 password:this.state.fields.password}).then(res=>console.log(res)) 
//             this.props.history.push('/book')
//       }
//   }

   
//     validateForm() {

//       let fields = this.state.fields;
//       let errors = {};
//       let formIsValid = true;

//       if (!fields["username"]) {
//         formIsValid = false;
//         errors["username"] = "*Please enter your username.";
//       }

//       if (typeof fields["username"] !== "undefined") {
//         if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
//           formIsValid = false;
//           errors["username"] = "*Please enter alphabet characters only.";
//         }
//       }

      
//       if (!fields["password"]) {
//         formIsValid = false;
//         errors["password"] = "*Please enter your password.";
//       }

//       if (typeof fields["password"] !== "undefined") {
//         if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["password"] = "*Please enter secure and strong password.";
//         }
//       }
//       this.setState({
//         errors: errors
//       });
//       return formIsValid;


//     }

    
//   render() {
//     return (
// <div className='container'>
//                 <h3 style={{textAlign:'center',color:'red'}}>Login</h3>
//                     <form method="post" onSubmit={this.submituserLoginForm} autoComplete='off' className="mt-5">
//                      <div className='col-md-10 form-group'>
//                         <label className='float-left block-text text-darken-2 s' > First name <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                          <input type="text" name='FirstName' value={this.state.fields.userName} 
//                          onChange={this.handleChange}
//                           placeholder='User Name....' required className='form-control' />
//                           <div className="errorMsg">{this.state.errors.userName}</div>
//                          </div>
        
//                          <div className='col-md-10 form-group'>
//                          <label className='float-left block-text text-darken-2 s' > Password <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                          <input type="password" name='Password' value={this.state.fields.password}  onChange={this.handleChange}
//                          placeholder='Password....' required className='form-control' />
//                          <div className="errorMsg">{this.state.errors.password}</div>
//                          </div>
                        
//                        <input type="submit" className='btn btn-primary m-2' value="Login"/>
//                       {/* <button type='button' className='btn btn-primary m-2' onClick={register}>Register</button> */}
//                     <p>Already have an account  ?? <a href="/login">Login</a></p>
//                       </form>
//                         </div>

//       );
//   }


// }


// export default Login;

















