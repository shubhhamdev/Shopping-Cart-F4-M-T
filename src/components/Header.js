import React from 'react'
import "./header.css"

export default function Header({home,setHome}) {
  return (
    <div className='header'>
        <h3 onClick={()=>setHome(true)}>Shopping Cart</h3>
        <div className='header-right'>
            <h3 onClick={()=>setHome(true)}>Home Page</h3>
            <h3 onClick={()=>setHome(false)}>Cart Page</h3>
        </div>
    </div>
  )
}
