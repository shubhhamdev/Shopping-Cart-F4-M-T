import React, { useState } from 'react'
import ShoppingCart from './components/ShoppingCart'
import Header from './components/Header'
import CartPage from './components/CartPage'

export default function App() {
  let [home,setHome] = useState(true)
  return (
    <div>
      <Header home={home} setHome={setHome}/>
      {home?<ShoppingCart/>:<CartPage/>}
    </div>
  )
}
