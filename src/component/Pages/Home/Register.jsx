import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Register = () => {
    return (
        <div>
            {/* Parent div */}
            <div>
                {/* login text */}
                <div><h1 className='text-4xl text-center font-bold'>Please Register </h1>
                </div>


                <div className="hero min-h-screen ">

                    {/* login image */}

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="hidden lg:inline-block">
                            <img src="https://img.freepik.com/free-vector/fill-out-concept-illustration_114360-5450.jpg?w=740&t=st=1683064713~exp=1683065313~hmac=9f54582754598c1166e2e744d6a3e60322e8b564c7fd60d2b8abc678e27092a9" alt="" />
                        </div>

                        {/* login form */}

                        <div className="card mt-5 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter your Name" name='name' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='photourl' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <a>Already have an account? <Link to='/login' className="link link-hover"> Login.</Link></a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error text-white">Register</button>
            <div className='mt-5 text-center btn btn-outline gap-2'><FcGoogle className='h-5 w-5' ></FcGoogle> <Link>Sigin  with google</Link></div>
            <div className='mt-5 text-center btn btn-outline gap-2 '> <FaGithub className='h-5 w-5'></FaGithub> <Link>Sigin  with Github</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;