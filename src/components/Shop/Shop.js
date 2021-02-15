import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import {addToDatabaseCart, getDatabaseCart} from '../../utilities/databaseManager';

const Shop = () => {
        
    const first20 = fakeData.slice(0,20);
    const [products , setProducts] = useState(first20);
    const [sProduct , setSProduct] = useState([]);

    const handleAddProduct = (product) =>{

        const sameProduct = sProduct.find(pd => pd.key === product.key);

        let count;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = sProduct.filter(pd => pd.key !== product.key);
            newCart = [...others , sameProduct];
            setSProduct(newCart);

        }
        else{
            product.quantity = 1;
            newCart = [...sProduct , product];
            setSProduct(newCart);
        }
        addToDatabaseCart(product.key , count)
    }

    useEffect(()=>{
        const savedProduct = getDatabaseCart();
        const productKeys = Object.keys(savedProduct);


        const products = productKeys.map(pd=>{
            const product = fakeData.find(product => product.key === pd);
            product.quantity = savedProduct[pd];
            return product;
        })
        setSProduct(products);
    } ,[])

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