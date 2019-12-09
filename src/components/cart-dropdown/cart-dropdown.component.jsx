import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { withRouter } from "react-router";

import CustomButton from '../custom-button/custom-button-component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className={"cart-dropdown"}>
        <div className="cart-items" >
            {
                cartItems.length ?
                cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                )) :
                <span className="empty-message">no articles</span>
            }
        </div>    
        <CustomButton onClick={ () => {
                    dispatch(toggleCartHidden());
                    history.push('/checkout')
                }
            }>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
}) 

// if the second argument is not specified, the dispatch is injected
// by react in the component
export default withRouter(connect(mapStateToProps)(CartDropdown));

// {"cart-dropdown " + (this.props.hidden ? 'hidden' : '')}
// toggleDropDown