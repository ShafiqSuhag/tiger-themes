import React from 'react';

const Cart = () => {
    return (
        <div>
             <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
                    <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                        {/* <!-- classic add --> */}
                        <div class="flex justify-between border-b-2 mb-2">
                            <div class="text-lg py-2">
                                <p>Classic Ads</p>
                            </div>
                            <div class="text-lg py-2">
                                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p> 0 </p>
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End classic add --> */}

                        {/* <!-- standout ads --> */}
                        <div class="flex justify-between border-b-2 mb-2">
                            <div class="text-lg py-2">
                                <p>Standout Ads</p>
                            </div>
                            <div class="text-lg py-2">
                                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p> 0 </p>
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End standout ads --> */}

                        {/* <!-- Premium ads --> */}
                        <div class="flex justify-between border-b-2 mb-2">
                            <div class="text-lg py-2">
                                <p>Premium Ads</p>
                            </div>
                            <div class="text-lg py-2">
                                <div class="flex flex-row space-x-2 w-full items-center rounded-lg">
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                                        </svg>
                                    </button>
                                    <p> 0 </p>
                                    <button class="focus:outline-none bg-pink-700 hover:bg-pink-800 text-white font-bold py-1 px-1 rounded-full inline-flex items-center ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Premium ads --> */}

                        {/* <!-- Total Item --> */}
                        <div class="flex justify-center items-center text-center">
                            <div class="text-xl font-semibold">
                                <p>Total Item</p>
                                <p class="text-5xl">0</p>
                            </div>
                        </div>
                        {/* <!-- End Total Item --> */}

                    </div>
                    <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                        {/* <!-- Total Price --> */}
                        <div class="flex justify-center items-center text-center">
                            <div class="text-xl font-semibold">
                                <p>Total Price</p>
                                <p class="text-5xl">0</p>
                              
                            </div>
                           
                        </div>
                        {/* <!-- End Total PRice --> */}
                    </div>
                    <div class="bg-white py-4 px-4 shadow-xl rounded-lg my-4 mx-4">
                        {/* <!-- Total Price --> */}
                        <div class="flex justify-center items-center text-center">
                            
                               
                                <button class="bg-indigo-500 rounded-lg font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
                            
                           
                        </div>
                        {/* <!-- End Total PRice --> */}
                    </div>
                    
                </div>
        </div>
    );
};

export default Cart;