import React, { useEffect, useState } from 'react';

const ChefBanner = ({id}) => {
    const idnumberStr = id.id
   const idnum = parseInt(idnumberStr)
   
    const [profile, setProfile] = useState([])
    
    useEffect(()=>{
        fetch(`https://dishdelight-server-mahmudhasan234.vercel.app/chef/${idnum}`)
        .then(res=>res.json())
        .then(data=>setProfile(data))
        .catch(error=>console.log(error))
    },[])
    return (
        <div>
            <div className='lg:flex items-center justify-between border-b-2'>
                <div>
                    <h1 className="text-7xl font-bold mb-10">{profile[0]?.chef_name}</h1>
                    <p className=" mt-5 mb-10 text-xl text-gray-600 font-semibold mr-44">{profile[0]?.bio}</p>
                </div>
                <div>
                    <img className='h-64 lg:w-full mb-5' src={profile[0]?.chef_picture} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;