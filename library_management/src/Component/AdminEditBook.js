import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams ,Link} from 'react-router-dom';


const AdminEditBook = (props) => {

    const [bookName,setBookName] = useState('');
    const [autherName,setAutherName] =useState('');
    const [cost,setCost] = useState('');
    const [quantity,setQuantity] = useState('');

    const [bookList,setBookList] = useState([]);
    const [status,setStatus] = useState(null);
    const { bookId } = useParams();
    const history = useHistory();
   // console.log(bookId);

    useEffect(()=>{
        // console.log("called");
         axios.get(`http://localhost:3001/home/get/${bookId}`).then((response)=>{
             console.log(response.data[0]);
           //  console.log("hi");
             setBookList(response.data);
             setBookName(response.data[0].bookName);
             setAutherName(response.data[0].autherName);
             setCost(response.data[0].cost);
             setQuantity(response.data[0].quantity);
         })

     },[]);

    const updateBook=(e)=>{
        e.preventDefault();
        // alert('data Updated successfully'+ bookId );
        axios.put(`http://localhost:3001/home/update/${bookId}`,{
            bookName:bookName,autherName:autherName,cost:cost,quantity:quantity,
        }).then((res)=>{
            console.log(res);
        alert('data Updated successfully');
        if(res.status === 200 || res.status === 'OK')
        props.history.push('/home');
       //setStatus(res.status)
       
     //  console.log(props);
    }).catch(err=>console.log(err));
};
//console.log(status)
//if(status === 200)
//props.history.push('/login');
    // const updateBook=(bookId)=>{
    //     axios.put('http://localhost:3001/home/update',{bookId:bookId,bookName:bookName,
    //     autherName:autherName,cost:cost,quantity:quantity}).then((response)=>{
    //         setBookList(bookList.map((val)=>{
    //             return (val.bookId == bookId ? {bookId:val.bookId,bookName:val.bookName,
    //             autherName:val.autherName,cost:val.cost,quantity:val.quantity} : val)
    //         }))
    //         alert('data Updated successfully');
    //         history.push('/home');
    //     });
    // };
   
    return (
        <div>
            <div className="container">
            <h3 style={{textAlign:'center',color:'red'}}> Update Book </h3>
            <form autoComplete='off' className="mt-5">
            <div className='col-md-10 form-group'>
            <label className='float-left block-text text-darken-2 s' >Book Name </label>
            <input type="text"  value={bookName} onChange={(e)=>setBookName(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s' >auther Name</label>
            <input type="text" value={autherName} onChange={(e)=>setAutherName(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s' > Cost  </label>
            <input type="text" value={cost}  onChange={(e)=>setCost(e.target.value)} className='form-control' />
             </div>
             <div className='col-md-10 form-group'>
             <label className='float-left block-text text-darken-2 s'> Quantity </label>
            <input type="text" value={quantity} onChange={(e)=>setQuantity(e.target.value)}className='form-control' />
             </div>
             <button className="btn btn-primary mr-2" onClick={(e)=>updateBook(e)}>Update</button>
             {/* <Link to="/login">login</Link>  */}
             {/* <button className="btn btn-primary mr-2" >Cancle</button>   */}
            </form>
            </div>
        </div>
    )
}

export default AdminEditBook





// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useHistory, useParams } from 'react-router'

// const AdminEditBook = () => {
//     let history = useHistory();
//     const {bookId} =useParams();
//     //alert(bookId);
//     const [booklist,setBookList] = useState({
//         bookName:'',
//         autherName:'',
//         cost:'',
//         quatity:''
//     });
//     const {bookName,autherName,cost,quatity} = booklist;
//     const onInputChange = e =>{
//         setBookList({...booklist,[e.target.bookName]:e.target.value});
//     };
//     useEffect(()=>{
//         loadBook();
//     },[]);
//     const onSubmit = async(e)=>{
//         e.preventDefault();
//         await axios.put(`http://localhost:3001/home/update/${bookId}`,booklist);
//         history.push('/home');
//     };
//     const loadBook = async()=>{
//         const result = await axios.get(`http://localhost:3001/home/update/${bookId}`);
//         setBookList(result.data);
//     }
//     return (
//         <div>
//             <div className="container">
//              <h3 style={{textAlign:'center',color:'red'}}> Update Book </h3>
//              <form autoComplete='off' className="mt-5" onSubmit={(e)=>onSubmit(e)}>
//              <div className='col-md-10 form-group'>
//              <label className='float-left block-text text-darken-2 s' >Book Name </label>
//              <input type="text"
//                            name="bookName"
//                            value={bookName}
//                            onChange={e => onInputChange(e)}
//                className='form-control' />
//               </div>
//               <div className='col-md-10 form-group'>
//               <label className='float-left block-text text-darken-2 s' >auther Name</label>
//              <input type="text"  
//              name="bookName"
//              value={autherName}
//              onChange={e => onInputChange(e)}
//              className='form-control' />
//               </div>
//               <div className='col-md-10 form-group'>
//               <label className='float-left block-text text-darken-2 s' > Cost  </label>
//             <input type="text"  name="cost"
//                            value={cost}
//                            onChange={e => onInputChange(e)} className='form-control' />
//               </div>
//               <div className='col-md-10 form-group'>
//               <label className='float-left block-text text-darken-2 s'> Quantity </label>
//              <input type="text"  
//              name="quatity"
//              value={quatity}
//              onChange={e => onInputChange(e)}className='form-control' />
//               </div>
//               <button className="btn btn-primary mr-2">Update</button> 
//               {/* <button className="btn btn-primary mr-2" >Cancle</button>   */}
//              </form>
//             </div>
//         </div>
//     )
// }

// export default AdminEditBook
