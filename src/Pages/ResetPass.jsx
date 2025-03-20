import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ResetPass = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [email, setEmail] = useState(location.state?.email || '');

    const handleReset = (e) => {
        e.preventDefault();
        window.open('https://mail.google.com', '_blank'); // Redirects to Gmail
        alert('Reset link sent! Check your email.');
        navigate('/login'); // Redirects to login page
    };

    return (
        <div className="my-32 flex justify-center items-center">
            <Helmet>
                <title>DiscountPro | Reset</title>
            </Helmet>
            <div className="w-full max-w-md bg-white p-6 shadow-lg rounded-md">
                <h2 className="text-3xl font-bold text-center text-[#8D7B68] mb-6">
                    Reset Your Password
                </h2>
                <form onSubmit={handleReset} className="space-y-6">
                    <div className="form-control">
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <button
                            type="submit"
                            className="btn bg-[#8D7B68] text-white hover:bg-[#C8B6A6] transition duration-300 w-full"
                        >
                            Send Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ResetPass;
