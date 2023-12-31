import React, { useEffect, useState } from 'react';
import LazyLoad from 'react-lazyload';

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
            <div className='p-16 lg:flex items-center justify-between border-b-2 bg-gradient-to-r from-yellow-50 to-red-50 rounded-xl'>
                <div >
                    <h1 className="text-7xl font-bold mb-10">{profile[0]?.chef_name}</h1>
                    <p className=" mt-5 mb-10 text-xl text-gray-600 font-semibold mr-44">{profile[0]?.bio}</p>
                </div>
                <div>
                    <LazyLoad height={200} offset={100}><img className=' border-red-200 border-1 mb-5 rounded' src={profile[0]?.chef_picture} alt="" /></LazyLoad>
                </div>
            </div>
        </div>
    );
};

export default ChefBanner;