import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from './chefBanner';
import IndividualRecipe from './IndividualRecipe';


const ChefRecipe = () => {
    const id = useParams()
    console.log(id)
    const recipes = useLoaderData()
    console.log(recipes)
    return (
        <div>
           <ChefBanner id={id}></ChefBanner>
          <div className='mt-5'>
          {
            recipes.map(recipe=> <IndividualRecipe key={recipe.chef_id} recipe={recipe}></IndividualRecipe>)
           }
          </div>
        </div>
    );
};

export default ChefRecipe;