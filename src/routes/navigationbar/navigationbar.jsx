import { Link, Outlet } from "react-router-dom";
import { Fragment , useContext} from "react";

import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser} from "../utils/firebase/firebase.utils";
import './navigation.styles.scss'


const NavigationBar =()=>{
  const {currentUser,} =useContext(UserContext)

    return <Fragment>
      <div className="navigation"> 
      <Link className="logo-container" to='/home'>
            <Crwnlogo  className="logo"/>
            </Link>
            
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
            SHOP
            </Link>
            
            
          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
             
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/signIn'>
              SIGN IN </Link>
          )}
        </div>
      </div>
    <div>
      <Outlet/>
    </div>
    </Fragment> ;
  }
  export default NavigationBar ;