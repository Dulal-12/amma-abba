import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {

    const [rProduct , setRProduct] = useState([]);

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

   
    return (
        <div className = "shop-container">
                    <div className="product-container">
                        {
                            rProduct.map(product => <ReviewItem product={product}></ReviewItem>)
                        }
                    </div>
                    <div className="cart-container">

                    </div>
        </div>
    );
};

export default Review;