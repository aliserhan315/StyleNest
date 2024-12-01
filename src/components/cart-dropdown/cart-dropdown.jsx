import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cartItem';
import Button from '../button/button';
import { useNavigate } from 'react-router-dom';

import { CartDropdownContainer,EmptyMessage,CartItems } from './cart-dropdown.stle';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;