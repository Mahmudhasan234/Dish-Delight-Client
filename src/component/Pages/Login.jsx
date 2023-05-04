import React, { useContext, useRef, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {

    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
const navigate = useNavigate()
    const emailRef = useRef()
    const [error, setError] = useState('')
    const location = useLocation()
    console.log(location)
    const from = location.state?.from?.pathname || '/'
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        setError('') -
            signInUser(email, password)
                .then(result => {
                    const loggedinUser = result.user
                    console.log(loggedinUser, 'success')
                    navigate(from)
                })
                .catch(error => {
                    setError('Please Check Your Email or Password')
                    form.reset()
                });
    }
    const handleSignInWithGoogle = () => {

        signInWithGoogle()
            .then(result => {
                const googleUser = result.user;
                //   console.log(googleUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleSignInWithGithub = () =>
        signInWithGithub()
            .then(result => {
                const githubUser = result.user;
                //   console.log(googleUser)
                navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })



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
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="text" placeholder="Enter your email" name='email' ref={emailRef} required className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" required className="input input-bordered" />
                                    <label className="label">
                                        <a>Don't have an account? <Link to='/register' className="link link-hover"> register here.</Link></a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-error text-white">Login</button>
                                    <div onClick={handleSignInWithGoogle} className='mt-5 text-center btn btn-outline gap-2'><FcGoogle className='h-5 w-5' ></FcGoogle> <Link>Sigin  with google</Link></div>
                                    <div onClick={handleSignInWithGithub} className='mt-5 text-center btn btn-outline gap-2 '> <FaGithub className='h-5 w-5'></FaGithub> <Link>Sigin  with Github</Link></div>

                                    <p className='text-error mt-5'  >{error}</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;