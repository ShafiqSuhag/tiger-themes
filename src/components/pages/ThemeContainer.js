import React, { useEffect, useState } from 'react';
import Cart from './cart/Cart';
import Theme from './Theme';

const ThemeContainer = () => {

    const [cart , setCart] = useState([]);
    // const themeList = [
    //     { name: 'React Strapi App & SaaS Startup Template' , image : 'https://themeforest.img.customer.envatousercontent.com/files/354716794/01_texap_preview_large.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=27d6f0dd7177c1a86896d28d1ba6792d', price : 24, sales : 30, reviews : 1}
    // ]
    const handleAddToCart  = (product) => {
        // console.log('handleAddToCart',product);
        const newCart = [...cart , product]
        setCart(newCart)
        // console.log(newCart);
        
    }
    const [themeList, setThemeList] = useState([])
    // themeList.map(theme => console.log(theme) )
    useEffect(() => {
        fetch('./themes.json')
            .then(res => res.json())
            .then(data => {
                // console.log('themesData',data);
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
             
               <Cart  cart={cart}></Cart>
            </div>

        </div>
    );
};

export default ThemeContainer;