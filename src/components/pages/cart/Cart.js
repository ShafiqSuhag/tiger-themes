import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

    const { cart } = props;

    let itemTotalPrice = 0;
    if (cart.length > 0) {



        cart.map(cartItem => {
            console.log(cartItem)
            return itemTotalPrice = itemTotalPrice + parseFloat(cartItem.price)

        })
        console.log(itemTotalPrice);

    }



    return (
        <div>
            <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                    {/* <!-- classic add --> */}

                    {cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)}


                    {/* <!-- Total Item --> */}
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Item</p>
                            <p className="text-5xl">{props.cart.length}</p>
                        </div>
                    </div>
                    {/* <!-- End Total Item --> */}

                </div>
                <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                    {/* <!-- Total Price --> */}
                    <div className="flex justify-center items-center text-center">
                        <div className="text-xl font-semibold">
                            <p>Total Price</p>
                            <p className="text-5xl">${itemTotalPrice}</p>

                        </div>

                    </div>
                    {/* <!-- End Total PRice --> */}
                </div>
                <div className="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                    {/* <!-- Total Price --> */}
                    <div className="flex justify-center items-center text-center">


                        <button className="bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>


                    </div>
                    {/* <!-- End Total PRice --> */}
                </div>

            </div>
        </div>
    );
};

export default Cart;