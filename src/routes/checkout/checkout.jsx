import './checkout.scss';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkoutItem';
const Checkout = () => {
    const { cartItems,addItemToCart,removeItemFromCart,cartTotal } = useContext(CartContext);

    return (
        <div className="checkout-container">
            <div className='checkout-header'>
                <div className="header-block">
                <span>product</span>
                </div>
                <div className="header-block">
                <span>Description</span>
                </div>
                <div className="header-block">
                <span>Quantity</span>
                </div>
                <div className="header-block">
                <span>Price</span>
                </div>
                <div className="header-block">
                <span>TotalPrice</span>
                </div>
                
                <div className="header-block">
                <span>Remove</span>
                </div>
                
                    

                   
            </div>
            {cartItems.map((cartItem) =>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                  
                )
            )}
            <span className='total'>Total:{cartTotal}$</span>
        </div>
    );
};

export default Checkout;
