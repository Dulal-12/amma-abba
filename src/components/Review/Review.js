import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import image from '../../images/giphy.gif';
const Review = () => {

    const [rProduct , setRProduct] = useState([]);
    const [order , setOrder] = useState(false);

    useEffect(()=>{
        const savedProduct = getDatabaseCart();
        const productKeys = Object.keys(savedProduct);


        const products = productKeys.map(pd=>{
            const product = fakeData.find(product => product.key === pd);
            product.quantity = savedProduct[pd];
            return product;
        })
        setRProduct(products);
    } ,[])

   const handleRemoveProduct = (product)=>{

         const newProduct = rProduct.filter(pd => pd.key !== product.key);
         setRProduct(newProduct);
         removeFromDatabaseCart(product.key);

   }

const handlePlaceOrder = ()=>{
    setRProduct([]);
    processOrder();
    setOrder(true);
}
  
    return (
        <div className = "shop-container">

            {rProduct.length}
            {
                   (order) ? <img src = {image} alt = ""/> : null
               }
                    <div className="product-container">
                        {
                            rProduct.map(product => <ReviewItem product={product}  handleRemoveProduct = { handleRemoveProduct}></ReviewItem>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart sProduct = {rProduct} condition = {true}  handlePlaceOrder = { handlePlaceOrder}></Cart>
                    </div>

            
        </div>
    );
};

export default Review;