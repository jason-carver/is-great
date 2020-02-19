import React from 'react';
import { Link } from 'react-router-dom';

// ***need to add bootstrap stylings and clickable shopping cart****

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">Rewards</Link>
                    
                    <ul className="right">
                        <li><Link to="/shoppingpage">Shop</Link></li>
                        <li><Link to="/shoppingcart">My cart</Link></li>
                        <li><Link to="/shoppingcart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
    )
}

export default Navbar;