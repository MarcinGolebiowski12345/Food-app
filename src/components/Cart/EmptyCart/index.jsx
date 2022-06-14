import React from 'react';
import { useNavigate } from "react-router-dom";
import EmptyCartImg from './emptyCart.png';
import './styles.css';

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className='emptyCart'>
            <img src={EmptyCartImg} alt="empty" />
            <button onClick={() => navigate('/')}>
                <i className="fas fa-long-arrow-alt-left">Shop Now</i>
            </button>
        </div>
    )
}

export default EmptyCart;