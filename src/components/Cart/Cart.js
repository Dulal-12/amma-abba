import React from 'react';
import './Cart.css';

const Cart = ({sProduct}) => {

    const priceOfProduct = Math.floor(sProduct.reduce((sum , product) => sum+product.price , 0));
    const texVat = Math.floor((priceOfProduct/100)*10);
    return (
        <div >
            <h2 >Order Summary</h2>
            <p>Item Ordered : {sProduct.length}</p>
            <p>Price : {priceOfProduct} </p>
            <p>Tax : {texVat}</p>
            <p>Total Price : {priceOfProduct + texVat}</p>
            <button className = "main-btn" >Review Order</button>
            
        </div>
    );
};

export default Cart;