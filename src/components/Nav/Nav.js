import React from 'react';
import './Nav.css';
import {Link} from "react-router-dom"
import logo from '../H-CART logo.png'
import {BsSearch} from 'react-icons/bs'

const Nav = () => {
    return (
        <>

        <div className='nav-bar'>

            <div className='nav-bar-left'>
            <div className='home-logo'><Link to='/' ><img src={logo} alt=''></img></Link></div>
            <input className='search-bar' placeholder='search items'></input>
            
            </div>
        
            <ul className='nav-bar-right'>
            <BsSearch className='searchbutton'/>
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
