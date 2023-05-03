import React, { useEffect, useState } from 'react';
import Displayprofile from './Displayprofile';
import ChefRecipe from './ChefRecipe';

const ChefsProfile = () => {
    
   const [profiles, setProfiles] = useState([])

   useEffect(()=>{
    fetch('https://dishdelight-server-mahmudhasan234.vercel.app/chefsprofile')
    .then(res=>res.json())
    .then(data=>setProfiles(data))
    .catch(error=>console.log(error.message))
   },[])
    return (
        <div>
            {/* parent div */}
            <div>
                {/* div title */}
                <div> <h1 className='text-7xl font-bold text-center mt-10'>Top Italian Chef's</h1></div>
                {/* chefs profile */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16'>
{
    profiles.map(profile=> <Displayprofile key={profile.chef_id} profile={profile}></Displayprofile>

    )
}
                </div>
            </div>
        </div>
    );
};

export default ChefsProfile; <h1>here is chefs profile</h1>