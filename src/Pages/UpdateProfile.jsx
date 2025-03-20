import React, { useContext, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const navigate = useNavigate();

    const success = () => {
        Swal.fire({
            title: "Success 🎉",
            text: `Profile updated successfully!`,
            icon: "success",
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            if (user) {
                await updateProfile(user, { displayName: name, photoURL });
                success();
                navigate('/profile');
            }
        } catch (error) {
            console.error('Error updating profile:', error.message);
            alert('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#F1E7DC]">
            <Helmet>
                <title>DiscountPro | Update</title>
            </Helmet>
            <div className="w-full max-w-md p-5 bg-white shadow-lg rounded-md">
                <h2 className="text-2xl font-bold text-center text-[#8D7B68] mb-5">Update Profile</h2>
                <form onSubmit={handleUpdate}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-[#8D7B68]">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="input input-bordered w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block text-sm font-medium text-[#8D7B68]">
                            Photo URL
                        </label>
                        <input
                            type="text"
                            id="photoURL"
                            className="input input-bordered w-full"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn bg-[#8D7B68] text-white hover:bg-[#C8B6A6] w-full"
                    >
                        Update Information
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateProfile;
