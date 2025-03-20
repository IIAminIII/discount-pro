import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const Brands = () => {
    const brandData = useLoaderData();
    

    return (
        <div className='mt-5 flex flex-col justify-center items-center gap-5'>
            <Helmet>
                <title>DiscountPro | Brands</title>
            </Helmet>
            <h1 className='text-5xl font-bold text-center mb-5'>ALL BRANDS</h1>
            <div className='flex gap-3'>
                <input type="text" placeholder='Search' className='rounded-xl border p-3 ' />
                <button className='btn btn-ghost bg-[#2B3440] text-white'>search</button>
            </div>
            {
                brandData.map((brand, index) => (
                    <div key={index} className='flex justify-center items-center mb-5'>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure>
                                <img
                                    src={brand.brand_logo}
                                    alt="" />
                            </figure>
                            <div className="card-body">
                                <h2 className="font-bold  text-2xl text-center">
                                    {brand.brand_name}
                                </h2>
                                <p className='text-center'>{brand.description}</p>
                                <p>⭐{brand.rating}</p>
                                <div className="card-actions mt-3">
                                    <Link to={`/brands/${brand._id}`} className='btn btn-ghost bg-[#2B3440] text-white'>View Coupons</Link>
                                    {
                                        brand.isSaleOn  ? <div class="animate__animated animate__bounce animate__infinite border rounded-full bg-red-600 px-3 text-white ">Sale is On</div> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))


            }
        </div>
    );
};

export default Brands;