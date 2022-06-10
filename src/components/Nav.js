import React from 'react';
import '../App.css';
import {ReactComponent as Cart} from '../images/cart.svg';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
        <Link style={{'text-decoration': 'none'}} to="/">
            <h3 className="logo">Logo</h3>
        </Link>
        <ul className="nav-links">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/shop">
                <li>Shop</li>
            </Link>
            <Link to="/cart">
                <li>
                    <Cart style={{'height': '30px', 'width': '30px', 'fill': 'white'}} />
                </li>
            </Link>
        </ul>
    </nav>
  )
}

export default Nav;