import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDatabaseCart} from '../../utilities/databaseManager';
const Shop = () => {
        
    const first20 = fakeData.slice(0,20);
    const [products , setProducts] = useState(first20);
    const [sProduct , setSProduct] = useState([]);

    const handleAddProduct = (product) =>{
      
        const newProduct = [...sProduct , product];
        setSProduct(newProduct);
        const sameProduct = sProduct.filter(pd => pd.key === product.key);
        const count = sameProduct.length
        addToDatabaseCart(product.key , count+1)
    }

    return (
        <div className = "shop-container">
           
           <div className="product-container">
                        {
                            products.map(product => <Product product = {product}  handleAddProduct = { handleAddProduct } key={product.key}></Product>)
                        }
           </div>

           <div className="cart-container">
             <Cart sProduct = {sProduct}></Cart>
           </div>
        </div>
    );
};

export default Shop;