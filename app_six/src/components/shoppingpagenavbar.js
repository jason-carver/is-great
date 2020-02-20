import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingpagenavbar.css';

// ***need to add bootstrap stylings and clickable shopping cart****

 const Navbar = ()=>{
    return(
        <div>
            <nav className="nav-wrapper" >
                <div className="container">
                    <h2 className="brand-logo">Rewards Page</h2>
                    
                    <ul className="right">
                        <li><Link to="/ptpage">Home</Link></li>
                        <li><Link to="/shoppingcart">My cart</Link></li>
                        <li><Link to="/shoppingcart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>  
        </div>    
    )
}

export default Navbar;