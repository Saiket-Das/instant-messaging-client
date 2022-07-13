import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
// import googlePng from '../../../Assets/google.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../../../Components/Loading/Loading';




const Login = () => {
    const [signInWithEmailAndPassword, emailUser, emailLoading, emailError] = useSignInWithEmailAndPassword(auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate()
    const [passShown, setPassShown] = useState(false);


    let errorMsg;
    if (emailError) {

        // EMAIL LOGIN ERROR CUSTOMIZE 
        if (emailError) {
            if (emailError.code === "auth/user-not-found") {
                errorMsg = <p
                    className='text-center text-red-500 font-semibold bg-red-200 p-3 rounded-lg'>
                    Username is not found
                </p>
            }
            else if (emailError.code === "auth/wrong-password") {
                errorMsg = <p
                    className='text-center text-red-500 font-semibold bg-red-200 p-3 rounded-lg'>
                    Incorrect password
                </p>
            }

            else if (emailError.code === "auth/too-many-requests") {
                errorMsg = <p
                    className='text-center text-red-500 font-semibold bg-red-200 p-3 rounded-lg'>
                    Account has been temporarily disabled due to many failed login attempts
                </p>
            }
        }

    }



    // SUBMIT THE FORM 
    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        try {
            const confiq = {
                header: {
                    'Content-type': 'application/json'
                }
            }
            const { data } = await axios.post('http://localhost:5000/api/user/login', { email, password }, confiq);
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
        catch (error) { }
        await signInWithEmailAndPassword(data.email, data.password);
    };

    if (emailLoading) {
        return <Loading></Loading>;
    }

    if (emailUser) {
        navigate('/chats')
        toast.success('Login successfully');
    }


    return (
        <div className='container mx-auto my-auto'>

            <div className='flex justify-center items-center '>
                <div className='card border w-96 '>
                    <div className='card-body'>
                        <h2 className="text-center text-2xl font-bold">Login </h2>

                        {/* ----------- FORM  -----------  */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* ----------- USERNAME OR EMAIL  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Username or Email"
                                    className="input rounded-none input-black w-full max-w-xs p-0 login-email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Provide a valid Email'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                            </div>



                            {/* ----------- PASSWORD  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <div className='flex'>
                                    <input
                                        type={passShown ? 'text' : 'password'}
                                        placeholder="Password"
                                        className="input rounded-none input-black w-full max-w-xs p-0 login-password"
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: 'Password is required'
                                            },
                                            minLength: {
                                                value: 6,
                                                message: 'Must be 6 characters or longer'
                                            }
                                        })}
                                    />

                                    <label className="swap swap-rotate absolute  ml-72">
                                        <input type="checkbox" />
                                        <FontAwesomeIcon
                                            onClick={() => setPassShown(!passShown)}
                                            icon={faEyeSlash}
                                            className='swap-on fill-current w-5 h-12  '
                                        />
                                        <FontAwesomeIcon
                                            onClick={() => setPassShown(!passShown)}
                                            icon={faEye}
                                            className='swap-off fill-current w-5 h-12  '
                                        />
                                    </label>
                                </div>

                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>



                            <input className='btn btn-primary w-full max-w-xs mt-4 text-white' type="submit" value="Login" />

                        </form>


                        {/* ERROR MESSAGE  */}
                        {errorMsg}


                        {/* SIGN UP LINK  */}
                        <p className='text-center mt-1'>Don't have an account?
                            <span className='text-primary'>
                                <Link to='/signup'> Signup</Link>
                            </span>
                        </p>

                        {/* <div className="divider">OR</div> */}


                        {/* LOGIN WITH GOOGLE */}
                        {/* <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-secondary w-full max-w-xs mt-4 text-white">

                            <div className='flex items-center gap-10'>
                                <img className='w-8' src={googlePng} alt="" />
                                <p>Continue with Google</p>
                                <p></p>
                            </div>
                        </button> */}

                    </div>
                </div>
            </div >


        </div >
    );
};

export default Login;