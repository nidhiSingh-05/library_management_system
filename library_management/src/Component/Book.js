import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Book = (props) => {
    const [bookName ,setBookName] = useState();
    const [autherName,setAutherName] = useState();
    
    const [bookList,setBookList] = useState([]); 
    useEffect(()=>{
        // console.log("called");
         axios.get('http://localhost:3001/home/get').then((response)=>{
             console.log(response.data);
            // console.log("hi");
             setBookList(response.data);
         })
     },[]);
     
    //  const issueBook=(e) =>{
    //    e.preventDefault();
    //    props.history.push('/issueBook'); 
    //  }
    return (
        <div>
            <h3 style={{textAlign:'center',color:'red'}}> Available Books </h3>
            <table className="table table-striped">
                    <thead>
                        <th>Sr.No.</th>
                        <th>BookName</th>
                        <th>AutherName</th>
                        <th>Cost</th>
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
                                   {/*<button  className="btn btn-success" onClick={(e)=>issueBook(e)}>Issue</button> */}
                                   <td>
                                   <Link className="btn btn-success mr-2" to={`/issueBook/${val.bookId}`}>Issue_Book</Link>
                                   </td>
                               </tr>
                           </tbody>
                            )
                        })
                    }
                 </table>
                

        </div>
    )
}

export default Book
