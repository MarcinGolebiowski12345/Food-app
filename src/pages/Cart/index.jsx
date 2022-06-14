import React from 'react';
import Logo from '../../components/common/Logo';
import Menu from '../../components/common/Menu';
//import MenuItem from '../../components/common/Menu/MenuItem';
import Footer from '../../components/common/Footer';
import './styles.css';
import EmptyCart from '../../components/Cart/EmptyCart';
import {
    selectCartItems,
    selectCartItemsCount,
    selectCartTotal,
  } from '../../redux/cart/cart.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const Cart = ({ cartCount, cartList, cartTotal }) => {
    return (
        <>
          <div className='cart-header'>
            <Logo />
          </div>
          {cartCount === 0 ? (
            <EmptyCart />
          ) : (
            <div className='orders'>
              <h1 className='orders-heading'>Your Orders</h1>
              <div className='orders-menu'>
                <Menu list={cartList} />
              </div>
              <h3 className='orders-total'>Your Total ${cartTotal}</h3>
            </div>
          )}
          <Footer />
        </>
      )
}

const mapStateToProps = createStructuredSelector({
    cartCount: selectCartItemsCount,
    cartList: selectCartItems,
    cartTotal: selectCartTotal,
  });

export default connect(mapStateToProps)(Cart);