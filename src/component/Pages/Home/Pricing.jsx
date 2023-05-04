import React from 'react';

const Pricing = () => {
    return (
        <div>
            <section className='my-32'>
                {/* Pricing title section */}
                <div>
                    <h1 className='text-5xl font-bold text-center'>Get Access all the Exclusive <br /> Recipes from Top Italian Chef <br /> Around The World</h1>
                </div>
                {/* Pricing card section */}
                <div>
                    <div className='flex lg:flex-row lg:justify-center flex-col container items-center gap-24 mt-20'>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title text-base">Free</h2>
                            <p className='text-xl font-semibold text-gray-650'>Get access to a limited set of recipes and features</p>
                            <ul className='my-5 list-disc mx-5'>
                                <li>Limited access to recipes</li>
                                <li>No access to premium features</li>
                                <li>No personalized recommendations</li>
                            </ul>
                            <div className="card-actions">
                                <button className="btn btn-error text-white">Get Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card lg:w-80 w-72 bg-gradient-to-r from-amber-200 to-red-200 shadow-2xl">
                        <div className="card-body">
                            <h4 className="card-title">Recommended</h4>
                            <h1 className='font-bold'><span className='text-5xl ' >$9.99</span><small className='text-sm font-normal'>per month</small></h1>
                            <p className='text-xl font-semibold text-gray-650'>Unlock all features and get access to exclusive recipes</p>
                            <ul className='my-5 list-disc mx-5 font-semibold text-gray-600'>
                                <li>Unlimited access to recipes</li>
                                <li>Access to premium features</li>
                                <li>Personalized recommendations</li>
                                <li>Ad-free experience</li>
                                <li>Exclusive recipes</li>
                            </ul>
                            <div className="card-actions">
                                <button className="btn btn-error text-white">Get Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-72 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h4 className="card-title">Basic</h4>
                            <p className='text-xl font-semibold text-gray-650'>Get access to all features but without exclusive recipes</p>
                            <ul className='my-5 list-disc mx-5'>
                                <li>Unlimited access to recipes</li>
                                <li>Access to premium features</li>
                                <li>Personalized recommendations</li>
                            </ul>
                            <div className="card-actions">
                                <button className="btn btn-error text-white">get Now</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;