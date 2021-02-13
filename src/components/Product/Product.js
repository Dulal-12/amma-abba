import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = ({ product ,  handleAddProduct  }) => {

    const { name, img, stock, seller, price } = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <p style = {{color : 'green'}}>{name}</p>
                <p><small>By  : {seller}</small></p>
                <p><small>Only {stock} is available.Order soon....</small></p>
                <p><small>${price}</small>   </p>
                <button className = "main-btn"  onClick = {()=>  handleAddProduct (product)}> <FontAwesomeIcon icon={faShoppingCart} />Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;