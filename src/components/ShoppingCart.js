import React,{useState,useEffect,useContext} from "react";
import "./shoppingCart.css";
import MyCartContext from "./context/MyCartContext";

export default function ShoppingCart() {

let {myCart,setMyCart} = useContext(MyCartContext);

  let [allItems,setAllItems] = useState();
  // console.log(myCart);

  useEffect(()=>{
    getAllItems();
  },[])

  async function getAllItems() {
    let itemsData = await fetch("https://dummyjson.com/products");
    let items = await itemsData.json();
    setAllItems(items.products);
  }

  function addtoCart(item){
    setMyCart([...myCart,item]);
  }

  function removefromCart(item){
    setMyCart(myCart.filter((cartItem)=>cartItem.id!=item.id))
  }


  return (
    <div className="all-items-container">
      <h1>All Items</h1>
      <div className="all-items-div">
        {
          allItems && allItems.map((item)=>{
            let btnClick = false;
            return <div className="item" key={item.id}>
            <img
              src={item.thumbnail}
              alt={item.title}
            />
            <div className="item-title-price-div">
              <p>Title : {item.title}</p>
              <p>Price : ${item.price}</p>
            </div>
            <button className={"add-to-cart-btn "+(btnClick?"hidden":"block")} onClick={()=>addtoCart(item)}>Add To Cart</button>
            <button className={"remove-from-cart-btn "+(btnClick?"block":"hidden")} onClick={()=>removefromCart(item)}>Remove From Cart</button>
          </div>
          })
        }
      </div>
    </div>
  );
}
