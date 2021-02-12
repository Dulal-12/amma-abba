import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
        
    const first20 = fakeData.slice(0,20);
    const [products , setProducts] = useState(first20);

    return (
        <div className = "shop-container">
           
           <div className="product-container">
                        {
                            products.map(product => <Product product = {product} key={product.key}></Product>)
                        }
           </div>

           <div className="cart-container">
               <p>This is cart</p>
           </div>
        </div>
    );
};

export default Shop;