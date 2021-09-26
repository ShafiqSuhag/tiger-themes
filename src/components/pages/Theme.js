import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Theme = (props) => {
    const { name, rating, sales, price, preview_link, image, author, last_update } = props.theme;
    return (
        <div className="wrapper  antialiased text-gray-900 mb-10">
            <div>
                {/* theme image  */}
                <img src={image} alt=" theme preview " className="w-full object-cover object-center rounded-lg shadow-md h-60" />
                <div className="relative px-4 -mt-16  ">
                    <div className="bg-white p-6 rounded-lg shadow-lg">

                        <h4 title={name} className="mt-1 text-lg font-semibold uppercase leading-tight truncate"> {name} </h4>
                        <div className="flex  justify-between items-center text-sm mt-1">
                            <span>By : {author} </span>
                            <span className="text-gray-400">Last Update : <span className="text-gray-500"> {last_update} </span> 	</span>
                        </div>

                        <div className=" flex justify-between items-center text-lg font-semibold my-5">
                            <div className="text-yellow-400">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span className="ml-1">  {rating}</span>
                            </div>
                            <div> {sales} SALES </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                            <div className="text-2xl font-bold">${price}</div>
                            <div>
                                <button
                                    onClick={() => props.handleAddToCart(props.theme)}
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    className=" text-sm bg-indigo-600 font-semibold text-white px-2 py-1 m-w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 mr-2"
                                >

                                    {<FontAwesomeIcon icon={faCartArrowDown} />}   ADD TO CART
                                </button>
                                <a href={preview_link} target="_blank"
                                    data-modal-toggle="example"
                                    data-modal-action="open"
                                    className=" text-sm text-purple-600 border hover:text-white border-purple-600 px-2 py-1 m-w-32 rounded hover:bg-purple-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 " rel="noreferrer"
                                >

                                    <i className="far fa-eye"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Theme;