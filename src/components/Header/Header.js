import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className = "header">
                    <div>
                             <img src={logo} alt=""/>
                    </div>

                    <div>
                         <nav>
                                    <a href="/shop">Shop</a>
                                    <a href="/review">Review</a>
                                    <a href="/manage">Manage Inventory</a>
                         </nav>
                    </div>
        </div>
    );
};

export default Header;