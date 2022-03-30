import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const url = 'data.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([]);
    const handleClearBtn = () => {
        setCart([]);
    }
    const handleAddToCart = (selectedproduct) => {
        // console.log(selectedproduct)
        if (cart.length < 4) {
            let newCart = [];
            const exists = cart.find(product => product.id === selectedproduct.id);
            if (!exists) {
                selectedproduct.quantity = 1;
                newCart = [...cart, selectedproduct]
            }
            else {
                const rest = cart.filter(product => product.id !== selectedproduct.id)
                selectedproduct.quantity += 1;
                newCart = [...rest, selectedproduct]
            }
            setCart(newCart)
            // console.log(newCart)
        }
        else {
            alert("You can't select more than 4 items")
        }
    }
    return (
        <div className='shop'>
            <div className='product-section'>
                <h2>You can explore</h2>
                <div className='product-container'>
                    {
                        products.map(product =>
                            <Product
                                key={product.id}
                                product={product}
                                handleAddToCart={handleAddToCart}
                                cart={cart}
                            ></Product>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <Cart
                    cart={cart}
                    handleClearBtn={handleClearBtn}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;