import React, { useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router';


const Admin = () => {
    const history = useHistory();
    const [book,setBook] = useState({
        bookName:'',
        autherName:'',
        cost:'',
        quantity:''
    });
    const {bookName,autherName,cost,quantity} = book;
    const onInputChange = e =>{
        setBook({...book,[e.target.bookName]:e.target.value});
    };
    const onSubmit = async(e)=>{
        e.preventDefault();
        await axios.post('http://localhost:3001/home/insert',book);
        history.push('/admineditBook');
    };

    return (
          <div className="container">
        <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="bookName"
              value={bookName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="autherName"
              value={autherName}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="cost"
              value={cost}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="quantity"
              value={quantity}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">AddBook</button>
        </form>
      </div>
    </div>
    
  )
}

export default Admin;
