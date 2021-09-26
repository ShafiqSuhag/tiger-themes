import React from 'react';

const CartItem = (props) => {
    const {name, image} = props.cartItem; 
    return (
        <div className="flex justify-between border-b-2 mb-2">
            <img src={image} alt=""  className="w-20 rounded mr-5" />
            <div className="text-sm py-2 truncate">
                <p> {name} </p>
            </div>

        </div>

    )
};

export default CartItem;