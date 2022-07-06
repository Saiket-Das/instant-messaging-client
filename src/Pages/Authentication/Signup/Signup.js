import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
// import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import PhoneInput from "react-phone-number-input";



const Signup = () => {
    const [error, setError] = useState("");
    const [number, setNumber] = useState("");
    const [flag, setFlag] = useState(false);
    const [otp, setOtp] = useState("");
    const [result, setResult] = useState("");
    const navigate = useNavigate();


    console.log(number)

    const { register, handleSubmit, formState: { errors } } = useForm();


    function setUpRecaptha(number) {
        const recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {}, auth
        );
        recaptchaVerifier.render();
        return signInWithPhoneNumber(auth, number, recaptchaVerifier);
    }



    const getOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        setError("");
        if (number === "" || number === undefined)
            return setError("Please enter a valid phone number!");
        try {
            const response = await setUpRecaptha(number);
            setResult(response);
            setFlag(true);
        } catch (err) {
            setError(err.message);
        }
    };

    const verifyOtp = async (e) => {
        e.preventDefault();
        setError("");
        if (otp === "" || otp === null) return;
        try {
            await result.confirm(otp);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Phone Auth</h2>
                {error && < ><div className="alert alert-error shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{error}.</span>
                    </div>
                </div></>}



                <form onSubmit={getOtp} style={{ display: !flag ? "block" : "none" }}>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail"> */}
                    <PhoneInput
                        defaultCountry="MY"
                        value={number}
                        onChange={setNumber}
                        placeholder="Enter Phone Number"
                    />
                    <div id="recaptcha-container"></div>
                    {/* </Form.Group> */}
                    <div className="button-right">
                        <Link to="/">
                            <button className="btn btn-outline btn-error">Cancel</button>
                        </Link>
                        &nbsp;
                        <button className="btn btn-outline btn-primary">Set OTP</button>

                    </div>
                </form>

                <form onSubmit={verifyOtp} style={{ display: flag ? "block" : "none" }}>
                    {/* <Form.Group className="mb-3" controlId="formBasicOtp"> */}
                    <input
                        type="otp"
                        placeholder="Enter OTP"
                        onChange={(e) => setOtp(e.target.value)}
                    />
                    {/* </Form.Group> */}
                    <div className="button-right">
                        <Link to="/">
                            <button className="btn btn-outline btn-error">Cancel</button>
                        </Link>
                        &nbsp;
                        <button className="btn btn-outline btn-primary">Verify</button>

                    </div>
                </form>





            </div>
        </>
    );
};

export default Signup;