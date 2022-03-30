import React, { useEffect, useState } from 'react';
import SingleCart from '../SingleCart/SingleCart';
import './Cart.css'

const Cart = (props) => {
    const { cart, handleClearBtn } = props;

    // console.log(cart)
    const [offer, setOffer] = useState(false)
    useEffect(() => {
        if (cart.length > 0) {
            setOffer(true)
        }
        else {
            setOffer(false)
        }
    }, [cart])
    // console.log(offer);

    const [choose, setChoose] = useState({})
    const handleChooseBtn = (cart) => {
        const randomNumber = parseInt(Math.random() * cart.length)
        const item = cart[randomNumber];
        setChoose(item);
        // console.log(choose);
    }


    return (
        <div className='cart'>
            <h3>selected types: {cart.length}</h3>
            <h4>total items selected: </h4>
            {
                cart.map(singleCart => <SingleCart
                    key={singleCart.id}
                    singleCart={singleCart}
                // handleCrossBtn={handleCrossBtn}
                ></SingleCart>)
            }
            <div className='btn-container'>
                <p className='small-text'>I'm confused!</p>
                <button onClick={() => handleChooseBtn(cart)} className={offer ? "choose-btn btn" : "choose-btn-disabled btn"} disabled={!offer}>CHOOSE ONE FOR ME</button>
                <button onClick={handleClearBtn} className='clear-btn btn'>CLEAR ALL</button>
            </div>
            {
                Object.keys(choose).length > 0 && (<div>
                    <h3>You shouls buy:</h3>
                    <div className='single-cart-choose'>

                        <img className='single-image' src={choose.picture} alt="single-cart-img" />

                        <div className='single-cart-info'>
                            <h3>{choose.name}</h3>
                            <p><small>price: ${choose.price}</small></p>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Cart;