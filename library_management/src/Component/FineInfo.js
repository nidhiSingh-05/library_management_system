import axios from 'axios';
import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

const FineInfo = (props) => {
    const [bookName,setBookName] =useState('');
    const [fromDate,setFromDate] =useState('');
    const [toDate,setToDate] =useState('');
    const [noOfDays,setNoOfDays] = useState('');
    const { bookId } = useParams();
    
    const [bookList,setBookList] = useState([]);
    
    useEffect(()=>{
        // console.log("called");
         axios.get('http://localhost:3001/myBook/get').then((response)=>{
             console.log(response.data);
            // console.log("hi");
             setBookList(response.data);
             setBookName(response.data[0].bookName);
          //   setFromDate(response.data[0].fromDate);
             setToDate(response.data[0].toDate);
         })
     },[]);

     const d = new Date();
     const newDate = d.toLocaleDateString('zh-Hans-CN');
     console.log(newDate);
     const date2 = new Date(new Date().getTime()+(5*24*60*60*1000)).toLocaleDateString('zh-Hans-CN');

     const calFine =(e)=>{
         e.preventDefault();
         axios.put(`http://localhost:3001/myBook/fineInfo/${bookId}`,{
             bookName:bookName,fromDate:newDate,toDate:date2
         }).then((res)=>{
             console.log(res);
             let fine = 
             alert('fine calculated');
           //  props.history.push('/');
         }).catch(err=>{
             console.log(err);
         })
        
     }
    return (
        <div className="container center from-group">
            <h3 style={{color:'red'}}>Fine Info</h3>
            <center>
            <div className="row">
                <from autoComplete="off" className="mr-5 col-md-10">
                <label className='left'> Book Name  </label>
                        <div className="input-field col s12">
                           <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} 
                           className='form-control validate' />
                           </div>
                           
                           <label className='left'> From  </label>
                        <div className="input-field col s12">
                           <input type="text" 
                           value={newDate}
                           onChange={(e)=>setFromDate(e.target.value)}
                           className='form-control validate' />
                           
                           </div>
                           <label className='left'> To  </label>
                        <div className="input-field col s12">
                           <input type="text" 
                           value={date2}
                           onChange={(e)=>setToDate(e.target.value)}
                           className='form-control validate' />
                             </div>

                           <label className='left'> NoOfDays  </label>
                        <div className="input-field col s12">
                           <input type="text" 
                           value={noOfDays}
                           onChange={(e)=>setNoOfDays(e.target.value)}
                           className='form-control validate' /> 
                           </div>    
                           <button type='button' onClick={(e)=>calFine(e)} className='btn btn-primary mr-2'>Calculate_Fine</button>
                           <button type='button' className='btn btn-primary '>Return_Book</button>
                           </from>
                           </div>
                      </center>    
        </div>
    )
}

export default FineInfo
