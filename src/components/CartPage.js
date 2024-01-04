import React, { useContext } from "react";
import "./cartPage.css";
import "./shoppingCart.css";
import MyCartContext from "./context/MyCartContext";

export default function CartPage() {
  let { myCart, setMyCart } = useContext(MyCartContext);
  console.log(myCart);

  const checkoutTotalFunc = ()=>{
    let sum=0;
    for (const i of myCart) {
        sum+=i.price;
    }
    return sum;
  }

  return (
    <div>
      <h1>My Cart</h1>
      <div className="main-container">
        <div className="cart-items-container">
          {myCart &&
            myCart.map((item) => {
              return <div className="item" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <div className="item-title-price-div">
                  <p>Title : {item.title}</p>
                  <p>Price : ${item.price}</p>
                </div>
                <button
                  className="remove-from-cart-btn"
                  onClick={()=>setMyCart(myCart.filter((cartItem)=>cartItem.id!=item.id))}
                >
                  Remove From Cart
                </button>
              </div>;
            })}
        </div>
        <div className="checkout-container">
            <h3>Checkout List</h3>
            <div>
                {
                    myCart.map((item,index)=>{
                        return <div className="checkout-items">
                            <p>{index+1}. {item.title}</p>
                            <p>${item.price}</p>
                        </div>
                    })
                }
            </div>
            <hr />
            <h4 className="checkout-total">
                <p>Total</p>
                <p>${checkoutTotalFunc()}</p>
            </h4>
            <hr />
            <button className="final-checkout-btn">Click To Checkout</button>
        </div>
      </div>
    </div>
  );
}
