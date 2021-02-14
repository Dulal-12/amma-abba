import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom';


const Product = ({ product ,  handleAddProduct  , showBtn}) => {

    const { name, img, stock, seller, price , key } = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p style = {{color : 'green'}}><Link to = {'/product/'+key}>{name}</Link></p>
                <p><small>By  : {seller}</small></p>
                <p><small>Only {stock} is available.Order soon....</small></p>
                <p><small>${price}</small>   </p>
               {(showBtn) ? null :  <button className = "main-btn" onClick = {()=> handleAddProduct(product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
            </div>
        </div>
    );
};

export default Product;