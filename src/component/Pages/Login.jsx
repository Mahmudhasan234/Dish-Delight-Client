import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            {/* Parent div */}
            <div>
                {/* login text */}
                <div><h1 className='text-4xl text-center font-bold'>Please Login</h1>
                </div>


                <div className="hero min-h-screen ">

                    {/* login image */}

                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="hidden lg:inline-block">
                            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1683063540~exp=1683064140~hmac=5ddfdd3daacc849d7d50d326e3d2f2bb91b1c9e92798a4738c7f907042fcb7b7" alt="" />
                        </div>

                        {/* login form */}

                        <div className="card -mt-36 lg:mt-0 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='email' required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="text" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <a>Don't have an account? <Link  to='/register' className="link link-hover"> register here.</Link></a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error text-white">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;