import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors.js';

import './checkout.styles.scss';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const CheckoutPage = ({ cartItems, total }) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
               <span>product</span>
            </div>
            <div className='header-block'>
               <span>description</span>p
            </div>
            <div className='header-block'>
               <span>quantity</span>
            </div>
            <div className='header-block'>
               <span>price</span>
            </div>
            <div className='header-block'>
               <span>remove </span>
            </div>
        </div>
            {
                cartItems.map(cartItem => (
                    <CheckoutItem cartItem={cartItem} />
                ))
            }
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    
    </div>    
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
}) 

export default connect(mapStateToProps)(CheckoutPage);