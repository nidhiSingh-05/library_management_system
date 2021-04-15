import React, { useEffect, useState } from 'react'
//import './Home.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [bookName,setBookName] = useState('');
    const [autherName,setAutherName] =useState('');
    const [cost,setCost] = useState('');
    const [quantity,setQuantity] = useState('');

    const [bookList,setBookList] = useState([]);

    useEffect(()=>{
       // console.log("called");
        axios.get('http://localhost:3001/home/get').then((response)=>{
            console.log(response.data);
           // console.log("hi");
            setBookList(response.data)
        }).catch(error=>{
            throw error;
        })
    },[bookList]);

    const addBook=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/home/insert',{
            bookName:bookName,autherName:autherName,cost:cost,quantity:quantity,
        }).then(()=>{
            alert('data successfully insert ');
            // setBookList([...bookList,{bookName:bookName,autherName:autherName,cost:cost,quantity:quantity}])
        });
    };
    // const updateBook=()=>{
    //     axios.put('http://localhost:3001/home/update',)
    // }
    const deleteBook =(bookId)=>{
        axios.delete(`http://localhost:3001/home/delete/${bookId}`);
    }
    return (
       
        <div className="container">
             {/* <h3 style={{textAlign:'left'}}>Welcome Admin.....</h3> */}
            <h3 style={{textAlign:'center',color:'red'}}>  Add Books </h3>
            <form autoComplete='off' className="mt-5">
            <div className='col-md-10 form-group'>
            <label className='float-left block-text text-darken-2 s' >Book Name </label>
            <input type="text" onChange={(e)=>setBookName(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s' >auther Name</label>
            <input type="text"  onChange={(e)=>setAutherName(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s' > Cost  </label>
            <input type="text"  onChange={(e)=>setCost(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s'> Quantity </label>
            <input type="text"  onChange={(e)=>setQuantity(e.target.value)}className='form-control' />
             </div>
             <button className="btn btn-primary" onClick={(e)=>addBook(e)}>AddBook</button> 
                {/* <button>ShowBook</button> */}
            </form>
                <br></br>
                <table className="table table-striped">
                    <thead>
                        <th>Sr.No.</th>
                        <th>BookName</th>
                        <th>AutherName</th>
                        <th>Cost</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </thead>
                    {
                        bookList.map((val,index)=>{
                           console.log(val);
                           return(
                           <tbody>
                               <tr key={index}>
                                   <td>{index+1}</td>
                                   <td>{val.bookName}</td>
                                   <td>{val.autherName}</td>
                                   <td>{val.cost}</td>
                                   <td>{val.quantity}</td>
                                   <td><Link className="btn btn-success mr-2" to={`/adminEditBook/${val.bookId}`}>Edit</Link>
                                   <button onClick={()=>deleteBook(val.bookId)} className="btn btn-danger">Delete</button></td>
                               </tr>
                           </tbody>
                            )
                        })
                    }
                </table>

            </div>  
          
        
    )
}

export default Home
