import React from 'react';

const ReviewItem = ({product ,handleRemoveProduct}) => {
    const { name, img, stock, seller, price , key , quantity } = product;
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
                <p>Quantity : {quantity}</p>
                <button className = "main-btn" onClick = {()=> handleRemoveProduct(product)}>Remove</button>
        </div>
        </div>
    );
};

export default ReviewItem;