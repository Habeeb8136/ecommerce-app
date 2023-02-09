import React from "react";
import './Cart.css';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);
  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <hr></hr>
      <br></br>
      <div className="cart-container">
        {cartItems.items.length === 0 ? (
          <>
            <h2>Your shopping card is empty</h2>
            <Link to="/">
              <p>browse products</p>
            </Link>
          </>
        ) : (
          cartItems.items.map((item) => {
            return (
             
                <div className="cart-item">
      <img src={item.image} className="image" alt="item"/>
      <div className="item-details">
        <div className="item-name">{item.title}</div>
        <div className="item-price">Price : ${item.price}</div>
        
      </div>
      <div className="item-quantity">
        <div>quantity</div>
        <div className="quantity-selector">
        <button className="button">-</button>
        <input  value={item.quantity} className="input" />
        <button className="button">+</button>
        </div>
      </div>
      <div className="item-total">${item.price}</div>
    </div>
              
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
