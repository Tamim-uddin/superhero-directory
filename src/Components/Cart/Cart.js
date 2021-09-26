import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const person of cart){
        total = total + parseFloat(person.networth);
    }
    return (
        <div className="cart">
            <h5>Persons Added: {cart.length} </h5>
            <h6>Total Net Worth: $ {total}B </h6>

        </div>
    );
};

export default Cart;