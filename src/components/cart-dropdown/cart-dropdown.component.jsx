import React from 'react';

import CustomButton from '../custom-button/custom-button-component';

import './cart-dropdown.styles.scss';

const CartDropdown = (props) => (
    <div className={"cart-dropdown " + (props.toggleDropDown ? 'hidden' : '')}>
        <div className="cart-items" />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

export default CartDropdown;

// {"cart-dropdown " + (this.props.hidden ? 'hidden' : '')}
// toggleDropDown