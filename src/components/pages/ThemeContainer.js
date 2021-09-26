import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Theme from './Theme';

const ThemeContainer = () => {

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        if (cart.length) {
            for (const item of cart) {

                if (product.id === item.id) {
                    console.log('check exist')
                    return {};
                }
            }

        }


        const newCart = [...cart, product]
        setCart(newCart)


    }
    const [themeList, setThemeList] = useState([])

    useEffect(() => {
        fetch('./themes.json')
            .then(res => res.json())
            .then(data => {
                setThemeList(data);
            })
    }, [])


    return (
        <div className="flex pt-20 ">
            {/* theme cards  */}
            <div className="w-9/12 grid grid-cols-3 gap-4">
                {
                    themeList.map(theme => {
                        return <Theme handleAddToCart={handleAddToCart} key={theme.id} theme={theme}></Theme>
                    })
                }


            </div>
            {/* cart  */}
            <div className="w-3/12">

                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default ThemeContainer;