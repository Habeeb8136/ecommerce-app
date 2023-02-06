import React, { useState } from 'react';
import './Nav.css';
import {Link} from "react-router-dom"
import logo from '../H-CART logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Nav = () => {
    const cart=useSelector(state=>state.cart);
    
        
   
    return (
        <>

        <div className='nav-bar'>

            <div className='nav-bar-left'>
            <div className='home-logo'><Link to='/' ><img src={logo} alt=''></img></Link></div>
            {/* <input className='search-bar' placeholder='search items'></input> */}
            
            </div>
        
            <ul className='nav-bar-right'>
            <BsSearch className='searchbutton'/>


            <Link to="/cart">
            
            <div className='cart'><FaShoppingCart className='cart-logo'/><span className='cart-count'>{cart.items.length}</span></div>   
            
            </Link>
            
            
            
            
            <li className='signin'><Link to="/signin">SINGIN</Link></li>
            <li className='signup'><Link to="/signup">SINGUP</Link></li>
            </ul>

        </div>

        

            </>
    );
}

export default Nav;
