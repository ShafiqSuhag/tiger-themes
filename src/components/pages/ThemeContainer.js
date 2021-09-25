import React, { useEffect, useState } from 'react';
import Theme from './Theme';

const ThemeContainer = () => {
    // const themeList = [
    //     { name: 'React Strapi App & SaaS Startup Template' , image : 'https://themeforest.img.customer.envatousercontent.com/files/354716794/01_texap_preview_large.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=27d6f0dd7177c1a86896d28d1ba6792d', price : 24, sales : 30, reviews : 1}
    // ]
    const [themeList , setThemeList] = useState([])
    
    useEffect(()=>{
        fetch('./themes.json')
        .then(res => res.json())
        .then(data => {
            console.log('themesData',data);
            setThemeList(data);
        })
    },[])


    return (
        <div className="flex ">
            {/* theme cards  */}
            <div className="w-5/6 grid grid-cols-3 gap-4">
                {
                    themeList.map(theme =>  <Theme key={theme.name} theme={theme}></Theme>)
                }
           
           
            </div>
            {/* cart  */}
            <div  className="w-1/6">
                Total Items  : 0 <br />
                Total Amount : 0 
            </div>
            
        </div>
    );
};

export default ThemeContainer;