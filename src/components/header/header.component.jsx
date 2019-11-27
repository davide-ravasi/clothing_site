import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils'; 
import { createStructuredSelector } from 'reselect';

//import { ReactComponent as Logo } from '../../assets/crown.svg';
// <Logo className='logo' />
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';

import CartIcon from '../cart_icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';

const Header = ({ currentUser, toggleDropDown }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            Logo
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        { toggleDropDown ?  
                null : 
                <CartDropdown />

        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    toggleDropDown: selectCartHidden
})

export default connect(mapStateToProps)(Header);