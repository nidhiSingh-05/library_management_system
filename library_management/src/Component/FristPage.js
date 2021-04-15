import React from 'react'
import one from './IMG/one.jpg';
const FristPage = () => {
    return (
        <div>
            <h3 style={{color:"red",textAlign:"center"}}>WELCOME TO LIBRARY MANAGEMENT SYSTEM</h3>
            <div styles={{ backgroundImage:`url(${one})`}}></div>
            {/* <div style={{backgroundImage:`url(${one})`}}></div> */}
        </div>
    )
}

export default FristPage


