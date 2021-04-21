import React from 'react'
import background from './one.jpg';
const FristPage = () => {
    return (
        <div>
            <h3 style={{color:"red",textAlign:"center"}}>WELCOME TO LIBRARY MANAGEMENT SYSTEM</h3>
            {/* <div style={{backgroundImage:'url('+ one +')'}}></div> */}
            <div style={{ backgroundImage: `url(${background})`,backgroundSize:'cover'}}></div>
            {/* <div style={{backgroundImage:`url(${one})`}}></div> */}
        </div>
    )
}

export default FristPage


