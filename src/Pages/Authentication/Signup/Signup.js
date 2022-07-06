import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/fontawesome-free-solid';



const Signup = () => {
    const [
        createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const navigate = useNavigate()

    let errorMsg;
    if (error || updateError) {
        return errorMsg = <p className='text-center text-red-500 uppercase font-semibold'>
            {error?.message.slice(22, -2)}
        </p>
    }
    if (loading || updating) {
        return <p>Loading...</p>;
    }

    if (user) {
        navigate('/chats')
    }

    const onSubmit = async (data) => {
        console.log(data)
        const name = data.firstname + ' ' + data.lastname;
        console.log(name)
        console.log(typeof name)
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: name });
    };



    return (
        <div className='container mx-auto my-auto'>

            <div className='flex justify-center items-center '>
                <div className='card border w-96 mb-16'>
                    <div className='card-body'>
                        <h2 className="text-center text-2xl font-bold">Create an account </h2>

                        {/* ----------- FORM  -----------  */}
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* ----------- FIRST NAME  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input rounded-none input-black w-full max-w-xs p-0 signup-firstName "
                                    {...register("firstname", {
                                        required: {
                                            value: true,
                                            message: 'Firstname is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.firstname.message}</span>}
                                </label>
                            </div>



                            {/* ----------- LAST NAME  -----------  */}
                            <div className="form-control w-full max-w-xs ">
                                <div className='flex relative'>
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="input rounded-none input-black w-full max-w-xs p-0 signup-lastName"
                                        {...register("lastname", {
                                            required: {
                                                value: true,
                                                message: 'Last name is required'
                                            }
                                        })}


                                    />


                                    <label className="swap swap-rotate">

                                        <input type="checkbox" />

                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            className='swap-on fill-current w-5 h-10 '
                                        />

                                        <svg className="swap-off fill-current w-5 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                                    </label>
                                </div>


                                <label className="label">
                                    {errors.lastname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastname.message}</span>}
                                </label>
                            </div>


                            {/* ----------- USERNAME OR EMAIL  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="email"
                                    placeholder="Username or Email"
                                    className="input rounded-none input-black w-full max-w-xs p-0 signup-email"
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
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="input rounded-none input-black w-full max-w-xs p-0 signup-password"
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
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>



                            {/* ----------- CONFIRM PASSWORD  -----------  */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="input rounded-none input-black w-full max-w-xs p-0 signup-confirmPass"
                                    name="confirmPassword"
                                    {...register("confirmPassword", {
                                        validate: value =>
                                            value === password.current || "The passwords do not match"
                                    })}
                                />
                                <label className="label">
                                    {errors.confirmPassword && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                </label>


                            </div>



                            <input className='btn btn-primary w-full max-w-xs mt-4 text-white' type="submit" value="Create an account" />

                        </form>
                        {errorMsg}

                        <p className='text-center'>Already have an account?
                            <span className='text-primary font-semibold'>
                                <Link to='/'> Login </Link>
                            </span>
                        </p>


                    </div >
                </div >
            </div >

        </div >
    );
};

export default Signup;














{/* <div className="relative">
                                <input placeholder="'" className="text-md block px-3 py-2 rounded-lg w-full
                                bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md
                                focus:placeholder-gray-500
                                focus:bg-white
                                focus:border-gray-600  "/>

                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">

                                    <svg className="h-6 text-gray-700" fill="none" xmlns="http://www.w3.org/2000/svg"
                                        viewbox="0 0 576 512">
                                        <path fill="currentColor"
                                            d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z">
                                        </path>
                                    </svg>

                                    <svg className="h-6 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewbox="0 0 640 512">
                                        <path fill="currentColor"
                                            d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z">
                                        </path>
                                    </svg>

                                </div>
                            </div> */}