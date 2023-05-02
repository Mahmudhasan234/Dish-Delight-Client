import React from 'react';

import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <section>
            {/* parent div */}
            <div className=' lg:flex justify-center items-center lg:mx-10'>
                {/* heading div */}
                <div className=''><h1 className='lg:text-7xl mb-5 lg:mb-10 text-5xl font-bold'>Make Your food special with our <br />
                <span>Recipes</span></h1>
                 <button className='text-white px-5 py-3 rounded-full bg-gradient-to-r from-[#f12711] to-[#f5af19]'> <Link> Browse Recipes</Link> </button>
                 </div>
                {/* heading picture div  */}
                <div className=' w-full'><img src='https://i.ibb.co/6RtTg0G/chef-cooking.jpg' alt="" /></div>
            </div>
            </section>
        </div>
    );
};

export default Header;