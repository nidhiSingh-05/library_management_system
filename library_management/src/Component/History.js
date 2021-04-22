import axios from 'axios';
import React, { useEffect, useState } from 'react'

const History = () => {
    const [bookList,setBookList] = useState([]);

    useEffect(()=>{
        // console.log("called");
         axios.get('http://localhost:3001/myBook/get').then((response)=>{
             console.log(response.data);
            // console.log("hi");
             setBookList(response.data);
         })
     },[]);

    return (
        <div>
             <h3 style={{textAlign:'center',color:'red'}}> My Books Details </h3>
            <table className="table table-striped">
                    <thead>
                        <th>Sr.No.</th>
                        <th>BookName</th>
                        <th>AutherName</th>
                        <th>Cost</th>
                        <th>FromDate</th>
                        <th>ToDate</th>
                        <th>NoOfDays</th>
                        <th>TotalFine</th>
                        {/* <th>Action</th> */}
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
                                   <td>{val.fromDate}</td>
                                   <td>{val.toDate}</td>
                                   <td>{val.noOfDays}</td>
                                   <td>{val.fine}</td>
                                   
                               </tr>
                           </tbody>
                            )
                        })
                    }
                    </table>
        </div>
    )
}

export default History
