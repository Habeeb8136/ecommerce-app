import React from "react";
import './Cart.css';
import { useSelector , useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {FaTrashAlt} from 'react-icons/fa'
import { deleteFromCart } from "../../features/cart";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(cartItems);

  const removeItem = (item) => {
    dispatch(deleteFromCart(item))
  }

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
              <p>browse products--</p>
            </Link>
          </>
        ) : (
          <div className="cartContainer">
          <div className="total-value">
          <div>
          <h3>Total Cart Items  :  {cartItems.TotalItemsquantity} </h3>
          <h3>Total price  :  ${cartItems.totalItemsAmount.toFixed(2)}</h3>
          </div>
          <div>
            <button className="checkout">Checkout</button>
          </div>

          </div>

          
          {
          cartItems.items.map((item) => {
            return (
             
                <div className="cart-item">
      <img src={item.image} className="image" alt="item"/>
      <div className="item-details">
        <div className="item-name">{item.title}</div>
        <div className="item-price">Price : ${item.price}</div>
        
      </div>
      <div className="item-quantity">
        
        <div className="quantity-selector">
        <button className="button">-</button>
        <input  value={item.itemQuantity} className="input" />
        <button className="button">+</button>
        </div>
      </div>
      <FaTrashAlt className="deleteButton" onClick={()=> removeItem(item)}/>
      <div className="item-total">${item.price}</div>
    </div>
              
            );
          })}

          </div>
          
        )}
      </div>
      
    </div>
  );
};

export default Cart;
