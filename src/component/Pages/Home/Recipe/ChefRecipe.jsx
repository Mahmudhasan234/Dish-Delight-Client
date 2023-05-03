import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefBanner from './chefBanner';


const ChefRecipe = () => {
    const id = useParams()
    console.log(id)
    const recipes = useLoaderData()
    console.log(recipes)
    return (
        <div>
           <ChefBanner id={id}></ChefBanner>
        </div>
    );
};

export default ChefRecipe;