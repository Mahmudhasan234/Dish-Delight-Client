import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from './chefBanner';
import IndividualRecipe from './IndividualRecipe';
import BeatLoader from "react-spinners/BeatLoader";

const ChefRecipe = () => {
  const [spinner, setSpinner] = useState(false);

  useEffect(()=>{
      setSpinner(true)
      setTimeout(()=>{setSpinner(false)},5000)
  },[])
    const id = useParams()
    console.log(id)
    const recipes = useLoaderData()
    console.log(recipes)
    return (
        <div>
          {
             spinner ?  <BeatLoader className='text-center'
             color="#36d7b7"
             cssOverride={{}}
             loading
             size={20}
           />
           :
           <div>
            <ChefBanner id={id}></ChefBanner>
          <div className='mt-5'>
          {
            recipes.map(recipe=> <IndividualRecipe key={recipe.chef_id} recipe={recipe}></IndividualRecipe>)
           }
          </div>
           </div>
          }
           
        </div>
    );
};

export default ChefRecipe;