import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const IssueBook = (props) => {

    const [bookName,setBookName] = useState('');
    const [autherName,setAutherName] =useState('');
    const [cost,setCost] = useState('');
    const [fromDate,setFromDate] = useState('');
    const [toDate, setToDate] = useState();
    const [noOfDays,setNoOfDays] = useState('');
    const [bookList,setBookList] = useState([]);
    const { bookId } = useParams();

    useEffect(()=>{
      //   console.log("called");
         axios.get(`http://localhost:3001/home/get/${bookId}`).then((response)=>{
             console.log(response)
            // console.log(response.data[0]);
          //   console.log("hi");
              setBookList(response.data);
              setBookName(response.data[0].bookName);
              setAutherName(response.data[0].autherName);
              setCost(response.data[0].cost);
              setFromDate(response.data[0].fromDate);
              setToDate(response.data[0].toDate);
              setNoOfDays(response.data[0].noOfDays);
         })

     },[]);
    // var today = new Date();
    // today = today.toLocaleDateString();
    // var arr= today.split('/');
    // var y = arr[0];
    // var m = arr[1];
    // var d = arr[2];
    // var newDate =`${y}/${m}/${d}`;
    //  console.log(newDate);

    const d = new Date();
    const newDate = d.toLocaleDateString('zh-Hans-CN');
    console.log(newDate);
    const date2 = new Date(new Date().getTime()+(5*24*60*60*1000)).toLocaleDateString('zh-Hans-CN');

     var d1 = new Date(newDate);
     var d2 = new Date(date2);
     var time = d2.getTime() - d1.getTime();
     var Days =  time/(1000*60*60*24);
     console.log(Days);

    const issueBook=(e)=>{
       e.preventDefault();
        axios.post(`http://localhost:3001/book/issue/${bookId}`,{
            bookName:bookName,autherName:autherName,cost:cost,fromDate:newDate,toDate:date2,noOfDays:Days
        }).then((res)=>{
            console.log(res);
            alert('issue book called');
           // if(res.status === 200 || res.status === 'OK')
            props.history.push('/myBook');
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <div className="container center from-group">
            {/* <h3 style={{textAlign:'center',color:'red',marginTop:5}}> Issue Book </h3> */}
            <center>
            <div className="row">
                <from autoComplete="off" className=" col-md-10 mt-15">
                <label className='left'> Book Name  </label>
                        <div className="input-field col s12">
                           <input type="text" value={bookName} onChange={(e)=>setBookName(e.target.value)} 
                           className='form-control validate' />
                           </div>
                           
                           <label className='left'> Auther Name  </label>
                        <div className="input-field col s12">
                           <input type="text" value={autherName} onChange={(e)=>setAutherName(e.target.value)} 
                           className='form-control validate' />
                            </div>

                        <label className='left'> Cost  </label>
                        <div className="input-field col s12">
                           <input type="text" value={cost} onChange={(e)=>setCost(e.target.value)} 
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
                           <button type='button' onClick={(e)=>issueBook(e)} className='btn btn-primary mr-2'>Issue_Book</button>
                           {/* <button type='button' className='btn btn-primary '>Cancle</button> */}
                           </from>
                           </div>
                      </center>    
        </div>
    )
}

export default IssueBook
