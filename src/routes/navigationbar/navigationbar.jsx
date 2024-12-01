import { Link, Outlet } from "react-router-dom";
import { Fragment , useContext} from "react";
import CartIcon from "../../components/cart-icon/cart-icon";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.contexts";
import { CartContext } from "../../contexts/cart.context";
import { signOutUser} from "../utils/firebase/firebase.utils";
import { NavLinks,LogoContainer,NavLink,NavigationComponent } from "./navigation.styles";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";

const NavigationBar =()=>{
  const {currentUser,} =useContext(UserContext)
  const {isCartOpen}=useContext(CartContext)

    return <Fragment>
      <NavigationComponent> 
      <LogoContainer to='/'>
            <Crwnlogo  className="logo"/>
            </LogoContainer>
            
        <NavLinks>
            <NavLink to='/shop'>
            SHOP
            </NavLink>
            
            
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
             
              SIGN OUT{' '}
            </NavLink>
          ) : (
            <NavLink  to='/signIn'>
              SIGN IN </NavLink>
          )}
           <CartIcon />
        </NavLinks>
       {isCartOpen && <CartDropdown/>}
       
      </NavigationComponent>
    <div>
      <Outlet/>
    </div>
    </Fragment> ;
  }
  export default NavigationBar ;