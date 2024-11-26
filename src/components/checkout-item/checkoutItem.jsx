import './checkoutItem.scss'
import { CiCircleRemove } from "react-icons/ci";
import CartItem from '../cart-item/cartItem';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import { IoIosArrowDropright,IoIosArrowDropleft } from "react-icons/io";

const CheckoutItem =({cartItem})=>{
    
    const {removeItemFromCheckout,removeItemFromCart,addItemToCart} = useContext(CartContext)
    const {name,imageUrl,price,quantity} = cartItem
    const increment = ()=>addItemToCart(cartItem)
    const decrement =()=>removeItemFromCart(cartItem)
    const clear = ()=>{removeItemFromCheckout(cartItem)}

    return(
        <div className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'>
                <IoIosArrowDropleft className='icon' onClick={decrement} />
                </div>
                {quantity}
                <div className='arrow'>
                    <IoIosArrowDropright className='icon' onClick={increment} />
                </div>

            </span>
            <span className='price'>{price}$</span>
            <span className='price'>{price*quantity}$</span>
           <div className="remove-button">
            <CiCircleRemove className='icon' onClick={clear}/>

           </div>


        </div>
    )

}
export default CheckoutItem;
