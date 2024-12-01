import { PiHandbagLight } from "react-icons/pi";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer,ShoppingIcon,ItemCount } from "./cart-icon.style";


const CartIcon=()=>{
    const { isCartOpen,setIsCartOpen}=useContext(CartContext)
    const {cartCount}=useContext(CartContext)
    const toggleIsCartOpen =()=>setIsCartOpen(!isCartOpen)
    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
           <ShoppingIcon />
        <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )

}
export default CartIcon