import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const BrandsDetails = () => {
    const { _id } = useParams();
    const brands = useLoaderData();
    const brand = brands.find(brand => brand._id === _id);

    const handleCopyCode = (couponCode) => {
        navigator.clipboard.writeText(couponCode)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Coupon code copied to clipboard!',
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed to copy coupon code.',
                    showConfirmButton: false,
                    timer: 1500
                });
            });
    };

    return (
        <div className='flex flex-col justify-center items-center mt-5'>
            <Helmet>
                <title>DiscountPro | Details</title>
            </Helmet>
            {brand && (
                <>
                    <div className="card card-side bg-gradient-to-r from-[#A4907C] to-[#8D7B68] shadow-xl w-full md:w-1/2 lg:w-1/3 p-5 rounded-lg">
                        <figure className="flex justify-center">
                            <img
                                src={brand.brand_logo}
                                alt=""
                                className="rounded-lg border-4 border-white shadow-md w-full h-auto max-w-[150px] md:max-w-[200px] lg:max-w-[250px]"
                            />
                        </figure>
                        <div className="card-body text-white">
                            <h2 className="card-title text-xl md:text-3xl font-bold">{brand.brand_name}</h2>
                            <p className="text-lg md:text-xl">⭐ {brand.rating}</p>
                            <div className="card-actions">
                                <a href={brand.shop_link} target="_blank" rel="noopener noreferrer">
                                    <button className="btn bg-white text-[#8D7B68] hover:bg-[#A4907C] hover:text-white transition duration-300">
                                        Visit Store
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <h1 className='m-10 text-4xl font-bold text-[#8D7B68]'>All Coupons</h1>
                    {brand.coupons.map((coupon, index) => (
                        <div key={index} className=' m-2'>
                            <div className="card bg-gradient-to-r from-[#F1E7DC] to-[#C8B6A6] text-[#8D7B68] shadow-xl w-96 rounded-lg overflow-hidden">
                                <div className="card-body p-5">
                                    <h2 className="text-center font-bold text-3xl bg-[#8D7B68] text-white p-3 rounded-lg">
                                        {coupon.coupon_code}
                                    </h2>
                                    <p className="mt-3">💬 <strong>Description:</strong> {coupon.description}</p>
                                    <p>📅 <strong>Expiry Date:</strong> {coupon.expiry_date}</p>
                                    <p>⚠️ <strong>Condition:</strong> {coupon.condition}</p>
                                    <p>🏷️ <strong>Type:</strong> {coupon.coupon_type}</p>
                                    <div className="card-actions mt-4 justify-end">
                                        <button
                                            className="btn bg-[#8D7B68] text-white hover:bg-[#A4907C] transition duration-300"
                                            onClick={() => handleCopyCode(coupon.coupon_code)}
                                        >
                                            Copy Code
                                        </button>
                                        <a href={brand.shop_link} target="_blank" rel="noopener noreferrer">
                                            <button className="btn bg-white text-[#8D7B68] hover:bg-[#A4907C] hover:text-white transition duration-300">
                                                Use Now
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    );
};

export default BrandsDetails;
