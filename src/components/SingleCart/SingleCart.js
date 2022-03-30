import './SingleCart.css'

const SingleCart = (props) => {
    const { singleCart } = props;
    // console.log(quantity);
    const handleCrossBtn = () => {
        console.log("connented")
    }
    const { picture, name, price } = singleCart;
    return (
        <div className='single-cart'>
            <div className="single-image-container">
                <img className='single-image' src={picture} alt="single-cart-img" />
            </div>
            <div className='single-cart-info'>
                <h3>{name}</h3>
                <p><small>${price}</small></p>
                <p><small>quantity: {singleCart.quantity}</small></p>
            </div>
            <div>
                <button onClick={handleCrossBtn} className="cross-btn">X</button>
            </div>
        </div>
    );
};

export default SingleCart;