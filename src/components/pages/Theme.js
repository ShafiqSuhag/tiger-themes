import React from 'react';

const Theme = (props) => {
    
    console.log(props.theme);
    const { name, rating, sales, price, preview_link, image } = props.theme;
    return (
        <div className="wrapper  antialiased text-gray-900">
            <div>

                <img src={image} alt=" theme preview " className="w-full object-cover object-center rounded-lg shadow-md h-60" />

                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        {/* <div className="flex items-baseline">
                            <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                New
                            </span>
                            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                2 baths  &bull; 3 rooms
                            </div>
                        </div> */}

                        <h4 title={name} className="mt-1 text-lg font-semibold uppercase leading-tight truncate"> {name} </h4>

                        <div className="mt-1">
                            $1800
                            <span className="text-gray-600 text-sm">   /wk</span>
                        </div>
                        <div className="mt-4">
                            <span className="text-teal-600 text-md font-semibold">4/5 ratings </span>
                            <span className="text-sm text-gray-600">(based on 234 ratings)</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <div>${price}</div>
                            <div>
                                <button
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    class="bg-purple-600 font-semibold text-white p-2 w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"
      >
          
                                    ADD TO CART 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Theme;