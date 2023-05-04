import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const IndividualRecipe = ({recipe}) => {
    const [disable, setDisable] = useState(false);
    const handleFavourite =()=>{
        toast("Wow so easy!");
        setDisable(true)
        
    }
    const { recipe_name, cooking_method, ingredients } = recipe
    return (
        <div>
             <ToastContainer />
            <div className="card tracking-wide bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title text-black text-4xl">{recipe_name}</h2>
                    <div className="card-actions justify-end">
                        <button disabled={disable} onClick={handleFavourite} className="btn btn-outline" >Add to Favourite</button>
                    </div>
                    <p className='text-2xl font-bold my-5'>Ingredients</p>
                    <ul className='list-disc'>
                    <li className='text-xl ml-5'>{ingredients&&ingredients[0]}</li>
                    <li className='text-xl ml-5'>{ingredients&&ingredients[1]}</li>
                    <li className='text-xl ml-5'>{ingredients&&ingredients[2]}</li>
                    <li className='text-xl ml-5'>{ingredients&&ingredients[3]}</li>
                    <li className='text-xl ml-5'>{ingredients&&ingredients[4]}</li>
                    </ul>
                    
                    <p className='text-2xl font-bold my-5'>Cooking Method: 
                    </p>
                    <p className='text-xl font-semibold my-5'>{cooking_method}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default IndividualRecipe;