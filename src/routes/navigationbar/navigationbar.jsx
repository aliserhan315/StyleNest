import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import './navigation.styles.scss'
const NavigationBar =()=>{
    return <Fragment>
      <div className="navigation">
      <Link className="logo-container" to='/home'>
            <Crwnlogo  className="logo"/>
            </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
            SHOP
            </Link>
            <Link className="nav-link" to='/signIn'>
            SIGN-IN
            </Link>
        </div>
      </div>
    <div>
      <Outlet/>
    </div>
    </Fragment> ;
  }
  export default NavigationBar ;