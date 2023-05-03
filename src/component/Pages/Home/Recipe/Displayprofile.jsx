import React from 'react';
import {FcLike} from 'react-icons/fc'
const Displayprofile = ({ profile }) => {
    const { chef_picture, chef_name, years_of_experience, num_recipes, likes } = profile
    return (
        <div>
            {/* chefs profile */}
            <div>
            <div className="card card-side bg-base-100 shadow-xl mb-5">
                <figure><img className='h-64' src={chef_picture}/></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl fonr-semibold">{chef_name}</h2>
                        <p className='text-xl font-semibold text-gray-500'>{years_of_experience} Years of Experiences</p>
                        <p className='text-xl font-semibold text-gray-500'>Number of Recipies : {num_recipes} </p>
                    
                    <div className="card-actions justify-end items-center mt-10">
                    <p className='text-xl font-semibold text-gray-500 flex items-center gap-2'><FcLike></FcLike> {likes} </p>
                        <button className="btn btn-error text-white fontbold">View Recipe</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Displayprofile;