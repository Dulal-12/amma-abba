import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {

    const{ key }= useParams();
    const productSelected = fakeData.find(product => product.key === key);
   
    return (
        <div className="shop-container">
           <div className="product-container">
               <Product showBtn = {true} product={productSelected}></Product>
           </div>
        </div>
    );
};

export default ProductDetail;