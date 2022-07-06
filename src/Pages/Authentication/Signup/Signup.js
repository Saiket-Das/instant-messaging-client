import React, { useRef, useState } from 'react';
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

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const password = useRef({});
    password.current = watch("password", "");
    const navigate = useNavigate()
    const [passShown, setPassShown] = useState(false);
    const [confirmPassShown, setConfirmPassShown] = useState(false);

    // const togglePassVisiblity = () => {
    //     setPassShown(passShown ? false : true);
    // };

    // const toggleConfirmPassVisiblity = () => {
    //     setConfirmPassShown(confirmPassShown ? false : true);
    // };

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
        console.log(data.name)
        console.log(typeof data.name)
        // await createUserWithEmailAndPassword(data.email, data.password);
        // await updateProfile({ displayName: data.name });
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
                                <div className='flex'>
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
                                <div className='flex'>
                                    <input
                                        type={passShown ? 'text' : 'password'}
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


                                    <div className="swap swap-rotate absolute  ml-72"
                                        onClick={() => setPassShown(!passShown)}
                                    >
                                        <input type="checkbox" />
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            className='swap-on fill-current w-5 h-12  '
                                        />
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            className='swap-off fill-current w-5 h-12  '
                                        />
                                    </div>
                                </div>


                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                            </div>



                            {/* ----------- CONFIRM PASSWORD  -----------  */}
                            <div className="form-control w-full max-w-xs ">
                                <div className='flex'>
                                    <input
                                        type={confirmPassShown ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        className="input rounded-none input-black w-full max-w-xs p-0 signup-confirmPass"
                                        name="confirmPassword"
                                        {...register("confirmPassword", {
                                            validate: value =>
                                                value === password.current || "The passwords do not match"
                                        })}
                                    />

                                    <div className="swap swap-rotate absolute  ml-72"
                                        onClick={() => setConfirmPassShown(!confirmPassShown)}
                                    >
                                        <input type="checkbox" />
                                        <FontAwesomeIcon
                                            icon={faEye}
                                            className='swap-on fill-current w-5 h-12  '
                                        />
                                        <FontAwesomeIcon
                                            icon={faEyeSlash}
                                            className='swap-off fill-current w-5 h-12  '
                                        />
                                    </div>
                                </div>

                                <label className="label">
                                    {errors.confirmPassword && <span className="label-text-alt text-red-500">{errors.confirmPassword.message}</span>}
                                </label>

                            </div>




                            {/* ----------- LAST NAME  -----------  */}
                            <div className="form-control w-full max-w-xs ">
                                <div className='flex'>
                                    <input
                                        type="file"
                                        placeholder="Last Name"
                                        className="input rounded-none input-black w-full max-w-xs p-0 signup-lastName"
                                        {...register("photo", {
                                            required: {
                                                value: true,
                                                message: 'Last name is required'
                                            }
                                        })}
                                    />
                                </div>


                                <label className="label">
                                    {errors.lastname?.type === 'required' && <span className="label-text-alt text-red-500">{errors.lastname.message}</span>}
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




