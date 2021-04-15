import React, { useState } from 'react'
//import './Register.css'
import axios from 'axios';


function Register(props) {
    const [userName,setUserName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    
    const [value,setValue] = useState('');

    const register =(e)=>{
        e.preventDefault();
        if(userName.length === ''||userName.length> 0 || email.length === '' || password.length === '' || confirmPassword.length === '')
        {
            alert('fildes can not be empty');
        }
        else if(email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/))
        {
            setValue('Email should contain . and @')
        }
        else if(password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/))
        {
            setValue('password should conatin atleast 1 capital 1 special character and minimum length of 8')
        }
        else{
            if(password === confirmPassword)
        axios.post("http://localhost:3001/register",{username:userName,
        email:email,password:password,confirmPassword:confirmPassword}).then((response)=>{
            console.log(response.data);
            alert('Registered successfully');
            props.history.push('/login');
        }).catch(err=>{console.log(err);
        });
   }
}
    return (
        <div className='container'>
                <form  autoComplete='off' className="mt-5">
                    <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > First name <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='FirstName' value={userName} onChange={(e)=>setUserName(e.target.value)}
                         placeholder='First Name....' required className='form-control' />
                        </div>
                        <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Email <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="text" name='Email' value={email} onChange={(e)=>setEmail(e.target.value)} 
                        placeholder='Email....' required className='form-control' />
                        </div>
                        <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > Password <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="password" name='Password' value={password} onChange={(e)=>setPassword(e.target.value)}
                         placeholder='Password....' required className='form-control' />
                        </div>
                        <div className='col-md-10 form-group'>
                        <label className='float-left block-text text-darken-2 s' > ConfirmPassword <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
                        <input type="password" name='ConfirmPassword' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} 
                        placeholder='ConfirmPassword....' required className='form-control' />
                        </div>
                        <button type='button' className='btn btn-primary m-2' onClick={register}>Register</button>
                        <p>Already have an account  ?? <a href="/login">Login</a></p>
                        </form>
                        </div>
    )
}

export default Register





// import axios from 'axios';
// import React from 'react';
// //import '../style.css';


// class Register extends React.Component 
// {
//     constructor() {
//       super();
//       this.state = {
//         fields: {},
//         errors: {}
//       }

//       this.handleChange = this.handleChange.bind(this);
//       this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

//     };

//     handleChange(e) {
//       let fields = this.state.fields;
//       fields[e.target.name] = e.target.value;
//       this.setState({ 
//         fields
//       });

//     }

   

//     submituserRegistrationForm(e) {
//       e.preventDefault();
//       if (this.validateForm()) {
//           let fields = {};
//           fields["userName"] = "";
//           fields["email"] = "";
//           fields["password"] = "";
//           fields["confirmPassword"] = "";
//           this.setState({fields:fields});
//           alert("Registered Successfully....!!!");

//             axios.post('http://localhost:3001/register',{
//                 userName:this.state.fields.userName,
//                 email:this.state.fields.email,
//                 password:this.state.fields.password,
//             confirmPassword:this.state.fields.confirmPassword}).then(res=>console.log(res)) 
//             this.props.history.push('/login')
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

//       if (!fields["email"]) {
//         formIsValid = false;
//         errors["email"] = "*Please enter your email-ID.";
//       }

//       if (typeof fields["email"] !== "undefined") {
//         //regular expression for email validation
//         var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//         if (!pattern.test(fields["email"])) {
//           formIsValid = false;
//           errors["email"] = "*Please enter valid email-ID.";
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

//       if (!fields["confirmPassword"]) {
//         formIsValid = false;
//         errors["confirmPassword"] = "*Please enter your confirm Password.";
//       }

//       if (typeof fields["confirmPassword"] !== "undefined") {
//         if (!fields["confirmPassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
//           formIsValid = false;
//           errors["confirmPassword"] = "*Please enter secure and matches  password.";
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
//                     <h3 style={{textAlign:'center',color:'red'}}>RegistrationForm</h3>
//                     <form method="post" onSubmit={this.submituserRegistrationForm} autoComplete='off' className="mt-5">
//                      <div className='col-md-10 form-group'>
//                         <label className='float-left block-text text-darken-2 s' > First name <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                          <input type="text" name='FirstName' value={this.state.fields.userName} 
//                          onChange={this.handleChange}
//                           placeholder='First Name....' required className='form-control' />
//                           <div className="errorMsg">{this.state.errors.userName}</div>
//                          </div>
//                          <div className='col-md-10 form-group'>
//                          <label className='float-left block-text text-darken-2 s' > Email <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                          <input type="text" name='Email' value={this.state.fields.email}  onChange={this.handleChange} 
//                          placeholder='Email....' required className='form-control' />
//                          <div className="errorMsg">{this.state.errors.email}</div>
//                          </div>
//                          <div className='col-md-10 form-group'>
//                          <label className='float-left block-text text-darken-2 s' > Password <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                          <input type="password" name='Password' value={this.state.fields.password}  onChange={this.handleChange}
//                          placeholder='Password....' required className='form-control' />
//                          <div className="errorMsg">{this.state.errors.password}</div>
//                          </div>
//                          <div className='col-md-10 form-group'>
//                          <label className='float-left block-text text-darken-2 s' > ConfirmPassword <span aria-hidden='true' style={{ color: 'red' }}>*</span> </label>
//                         <input type="password" name='ConfirmPassword' value={this.state.fields.confirmPassword}  onChange={this.handleChange}
//                         placeholder='ConfirmPassword....' required className='form-control' />
//                         <div className="errorMsg">{this.state.errors.confirmPassword}</div>
//                        </div>
//                        <input type="submit" className='btn btn-primary m-2' value="Register"/>
//                       {/* <button type='button' className='btn btn-primary m-2' onClick={register}>Register</button> */}
//                     <p>Already have an account  ?? <a href="/login">Login</a></p>
//                       </form>
//                         </div>

//       );
//   }


// }


// export default Register;

