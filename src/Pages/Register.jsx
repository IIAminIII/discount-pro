import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { auth } from '../firebase/.firebase.config';
import { Helmet } from 'react-helmet-async';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const [showPassword, setShowPassword] = React.useState(false);

    const success = () => {
        Swal.fire({
            title: "Good job!",
            text: "Registration Successful!",
            icon: "success"
        });
    }
    const errorToast = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
        });
    }

    const handleRegister = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(email, password, name, photo);
        const regex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!regex.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Password must contain at least 6 characters, including UPPER/lowercase and numbers!",
            });
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                e.target.reset();
                success();
                navigate('/login');
                const profile = {
                    displayName: name,
                    photoURL: photo
                }
                updateProfile(auth.currentUser, profile)
                    .then(() => {
                        console.log('Profile updated');
                    })
                    .catch((error) => {
                        console.log('error', error.message);
                    });
            })
            .catch((error) => {
                console.log('error', error.message);
                errorToast();
            });

    }
    const handleGoogleRegister = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                navigate('/');
                success();
            })
            .catch((error) => {
                console.log('error', error.message);
                errorToast();
            });
    }
    const handleToggle = (e) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    return (
        <div className='my-20'>
            <Helmet>
                <title>DiscountPro | Register</title>
            </Helmet>
            <h2 className='text-3xl font-bold text-center'>Please Register</h2>
            <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto mb-2">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="photo url" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
                    <button onClick={handleToggle} className='btn btn-xs absolute right-6 top-12 '>
                        {
                            showPassword ? <FaEyeSlash /> : <FaEye />
                        }
                    </button>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-ghost border-[#8D7B68]">Register</button>
                </div>
            </form>
            <div className='flex justify-center items-center'>
                <button onClick={handleGoogleRegister} className="btn btn-outline p-2 w-1/2">
                    <FaGoogle className='ml-2' />
                    Register with google
                </button>
            </div>
            <p className='text-center mt-5'>Already have an account?<Link to='/login' className='text-md font-bold'>Login</Link> </p>
        </div>
    );
};

export default Register;