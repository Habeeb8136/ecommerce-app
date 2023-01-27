import React from 'react';
import './Cart.css'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems=useSelector(state=>state.cart)
    console.log(cartItems)
    return (
        
        <div className='cart-page'>
        <h1>Shopping Cart</h1>
        <hr></hr>
        <br></br>
        <div className='cart-container'>
        {cartItems.items.length===0?
        <>
            <h2>Your shopping card is empty</h2>
            <Link to='/'>
                <p>browse products</p>
            </Link>
        </>
        :
        cartItems.items.map((items)=>{
            return (
                <div key={items.id}>
                <p>
                    {items.title}
                </p>
                <p>
                    {items.price}
                </p>
                <p>
                    {items.itemQuantity}
                </p>
                </div>
            )
        })
        }
            
        </div>
        </div>
    );
}

export default Cart;
