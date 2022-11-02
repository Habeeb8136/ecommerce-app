import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom"



const Nav = () => {
    return (
        <>

        <div className='nav-bar'>

            <ul className='nav-bar-left'>
            <li className='home-logo'><Link to='/' ><div className='home-logo'></div></Link></li>
            <input className='search-bar' placeholder='search items'></input>
            
            </ul>
        
            <ul className='nav-bar-right'>
            <li className='cart'>
            
            <Link to="/cart">
            <div className='cart'>
            <div className='cart-logo'><div className='cart-count'>0</div></div>   
            </div>
            </Link>
            
            </li>
            <li><Link to="/signin">SINGIN</Link></li>
            <li><Link to="/signup">SINGUP</Link></li>
            </ul>

        </div>

        

            </>
    );
}

export default Nav;
