import React,{useState} from 'react'
import MyCartContext from './MyCartContext'

export default function MyCartContextProvider(props) {

    let [myCart,setMyCart] = useState([]);

  return (
    <MyCartContext.Provider value={{
        "myCart":myCart,
        "setMyCart":setMyCart
    }}>
        {props.children}
    </MyCartContext.Provider>
  )
}
