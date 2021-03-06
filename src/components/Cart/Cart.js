import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
const Cart = ({sProduct , condition ,  handlePlaceOrder}) => {

    const priceOfProduct = Math.floor(sProduct.reduce((sum , product) => sum+product.price*product.quantity , 0));
    const texVat = Math.floor((priceOfProduct/100)*10);
    return (
        <div >
            <h2 >Order Summary</h2>
            <p>Item Ordered : {sProduct.length}</p>
            <p>Price : {priceOfProduct} </p>
            <p>Tax : {texVat}</p>
            <p>Total Price : {priceOfProduct + texVat}</p>
         {
             (condition) ?<button className = "main-btn" onClick = { handlePlaceOrder} >Place Order</button>  :    <Link to='/review'><button className = "main-btn" >Review Order</button></Link>
         }
          
        </div>
    );
};

export default Cart;