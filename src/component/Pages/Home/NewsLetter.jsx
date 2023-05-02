import React from 'react';
import newsLetterImage from '../../../assets/newsletter_image.jpg'
const NewsLetter = () => {
    return (
        <div>

            {/* parent div */}

            <div className='flex justify-evenly tracking-wide items-center'>

                {/* image div */}

                <div><img className='w-64' src="https://img.freepik.com/free-vector/woman-receiving-mail-reading-letter_74855-5964.jpg?w=1060&t=st=1683047926~exp=1683048526~hmac=40dd8d35c14b5e2d6b140dc83052b35858959f9885ffcb14729a39b63f3380cb" alt="" />
                </div>

                {/* subscribe div */}
                
                <div className='text-right my-10'>
                    <h1 className='lg:text-2xl mb-2'>Subscribe to our <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-400 to-yellow-300'>News letter</span></h1>
                    <small >Get new recipe every week!!</small>
                    <input className='p-2 mt-4 w-4/5 rounded border-0 outline-none border-b-2' type="email" name="email" id="" placeholder='Please Enter Your Email Address' />
                    <button className='btn-error px-5 py-2 text-white font-semibold mt-3 rounded-lg'>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;