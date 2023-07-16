import React from "react";

const CartItem = (props) => {

    const { price, title, qty } =props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =props;
    return (
        <div className='cart-item'>
            <div className='left-block'>
                <img style={styles.image} src={product.img}/>
            </div>
            <div className='right-block'>
                <div className="product">{title}</div>
                <div className="prize">Rs: {price}</div>
                <div className="quantity">qty: {qty}</div>

                <div className='cart-item-button'>
                    <img
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/4225/4225674.png"
                        alt="increase"
                        onClick={() => onIncreaseQuantity(product)}
                    />
                    <img
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/9068/9068779.png"
                        alt="decrease"
                        onClick={() => onDecreaseQuantity(product)}
                    />
                    <img className="action-icons" src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" alt="delete"
                        onClick={() => onDeleteProduct(product.id)}
                    />
                </div>
            </div>
        </div>

    )
}
const styles = {
    image: {
        height: 210,
        width: 210,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;