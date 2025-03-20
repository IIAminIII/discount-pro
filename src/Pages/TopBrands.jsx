import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopBrands = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setBrands(data);
        });
    }, []);


    return (
        <div className="flex items-center justify-center mx-6 gap-8">
        {
            brands.map((brand, index) => (
                <Link key={index} to={`/brands/${brand._id}`} className="transform hover:scale-110 transition-all duration-300">
                    <div className="relative overflow-hidden rounded-full w-32 h-32 bg-white shadow-xl transition-transform duration-300 ease-in-out hover:shadow-2xl hover:scale-105">
                        <img
                            src={brand.brand_logo}
                            alt={brand.brand_name}
                            className="object-contain w-full h-full transition-all duration-300 ease-in-out"
                        />
                    </div>
                </Link>
            ))
        }
    </div>
    );
};

export default TopBrands;