import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
const Profile = () => {
    const { user } = useContext(AuthContext)

    return (
        
        <div className='flex flex-col justify-center items-center'>
            <Helmet>
                <title>DiscountPro | Profile</title>
            </Helmet>
            {
                user && <>
                    <div
                        className="w-full h-40 bg-gradient-to-r from-[#8D7B68] to-[#A4907C] flex items-center justify-center"
                    >
                        <h1 className="text-white text-2xl md:text-4xl font-bold">
                            Welcome, {user.displayName}!
                        </h1>
                    </div>
                    <div className="card flex justify-center w-96 bg-base-100 shadow-xl mt-20">
                        <figure className="px-10 pt-10">
                            <img
                                src={user.photoURL}
                                alt="User"
                                className="rounded-full w-32 h-32"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-bold">Name : {user.displayName}</h2>
                            <p className="text-lg">Email:{user.email}</p>
                            <div className="card-actions mt-4">
                                <Link to="/update-profile"
                                    className="btn bg-[#A4907C] text-white hover:bg-[#8D7B68]"
                                >
                                    Update Profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </>



            }
        </div>
    );
};

export default Profile;