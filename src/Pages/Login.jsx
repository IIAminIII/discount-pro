import React, { useState, useContext } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/.firebase.config';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const [shPassword, setShPassword] = useState(false);
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const location = useLocation();

    const success = (name) => {
        Swal.fire({
            title: "Welcome Back! 🎉",
            text: `Hello, ${name}! You have successfully logged in.`,
            icon: "success",
        });
    };

    const errorToast = (e) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: e,
        });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        signIn(email, password)
            .then((userCredential) => {
                const loggedInUser = userCredential.user;
                const name = loggedInUser.displayName || "User"; 
                console.log(`Logged in as: ${name}`);
                e.target.reset();
                navigate(location?.state ? location.state : '/');
                success(name);
            })
            .catch((error) => {
                console.log(error);
                errorToast(error.message);
            });
    };

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const name = result.user.displayName || "User";
                console.log(`Logged in with Google as: ${name}`);
                navigate(location?.state ? location.state : '/');
                success(name);
            })
            .catch((error) => {
                console.log(error);
                errorToast(error.message);
            });
    };

    const handleToggleSign = (e) => {
        e.preventDefault();
        setShPassword(!shPassword);
    };

    return (
        <div className="my-[154px]">
            <Helmet>
                <title>DiscountPro | Login</title>
            </Helmet>
            <h2 className="text-3xl font-bold text-center">Please Login</h2>
            <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto mb-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type={shPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required
                    />
                    <label className="label">
                        <Link
                            to="/reset"
                            state={{ email }}
                            className="label-text-alt link link-hover"
                        >
                            Forgot password?
                        </Link>
                    </label>
                    <button onClick={handleToggleSign} className="btn btn-xs absolute right-6 top-12">
                        {shPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-ghost border-[#8D7B68]">Login</button>
                </div>
            </form>
            <div className="flex justify-center items-center my-2">
                <button onClick={handleGoogleLogin} className="btn btn-outline p-2 w-1/2">
                    <FaGoogle className="ml-2" />
                    Login with Google
                </button>
            </div>
            <p className="text-center">
                Don't have an account?
                <Link to="/register" className="text-md font-bold">
                    {' '}
                    Register
                </Link>
            </p>
        </div>
    );
};

export default Login;
