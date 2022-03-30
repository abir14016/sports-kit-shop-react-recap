import React from 'react';
import './Product.css'

const Product = (props) => {
    const { handleAddToCart, product } = props
    const { id, name, picture, price, manufacturer, ratings } = product
    // console.log(props.product)
    return (
        <div className='product'>
            <div className="image-container">
                <img src={picture} alt="product-imgage" />
                <p><small>product id: {id}</small></p>
            </div>
            <div className="product-info">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
            </div>
            <div className="product-detail">
                <h5>Manufacturer: {manufacturer}</h5>
                <h6>Ratings: {ratings} stars</h6>
            </div>
            <div className="addToCart-btn-container">
                <button onClick={() => handleAddToCart(product)} className='addToCart-btn'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default Product;