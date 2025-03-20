import React from 'react';
import Marquee from 'react-fast-marquee';
import TopBrands from './TopBrands';
import { Search, Tag, ShoppingBag } from 'lucide-react';
import { Link, useLoaderData } from 'react-router-dom';
import 'animate.css';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    const brands = useLoaderData();
    const brandData = brands.filter(brand => brand.isSaleOn === true);

    return (
        <div>
            <Helmet>
                <title>DiscountPro | Home</title>
            </Helmet>
            {/* slider starts */}
            <div className="carousel w-11/12 ml-5 md:ml-16 md:h-[650px] mt-10 rounded-lg shadow-lg overflow-hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/TBppMKh/slide3.jpg"
                        className="w-full object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide4" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/PgpDXgf/slide5.jpg"
                        className="w-full object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide1" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/42M3gxL/slide1.png"
                        className="w-full object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide2" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❯
                        </a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://i.ibb.co.com/59VJxKx/slide4.jpg"
                        className="w-full object-cover transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black opacity-25"></div>
                    <div className="absolute top-1/2 left-5 right-5 transform -translate-y-1/2 flex justify-between">
                        <a href="#slide3" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle text-[#8D7B68] bg-white border-2 border-[#8D7B68] hover:bg-[#8D7B68] hover:text-white transition-all duration-300">
                            ❯
                        </a>
                    </div>
                </div>
            </div>

            {/* slider ends */}
            {/* marquee section */}
            <section className="my-12">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-[#8D7B68] uppercase tracking-wide">Top Brands</h2>
                <Marquee pauseOnHover={true} speed={50}>
                    <TopBrands />
                </Marquee>
            </section>
            {/* marquee ends */}

            {/* Brands On Sell */}
            <section className="m-10 bg-white">
                <h2 className="text-4xl font-extrabold text-center mb-12 text-[#8D7B68] animate__animated animate__pulse animate__infinite tracking-wide">
                    Brands On Sale
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {
                        brandData.map((brand, index) => (
                            <div key={index}>
                                <div className="bg-white rounded-lg  h-96 shadow-xl flex flex-col overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                                    <div className="flex justify-center items-center p-6">
                                        <div className="w-full h-40 bg-white flex items-center justify-center shadow-lg">
                                            <img
                                                className="object-cover"
                                                src={brand.brand_logo}
                                                alt={`${brand.brand_name} logo`}
                                            />
                                        </div>
                                    </div>
                                    <div className="p-5 flex flex-col gap-2 bg-white text-[#A4907C]">
                                        <h2 className="text-lg font-bold">Name: {brand.brand_name}</h2>
                                        <p className="text-sm font-medium">Category: {brand.category}</p>
                                        <p className="text-sm font-medium">Total Coupons: {brand.coupons.length}</p>
                                        <Link to={`/brands/${brand._id}`} className="btn bg-[#A4907C] text-white rounded-3xl hover:bg-[#8D7B68] transition-colors duration-300 mt-auto">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
            {/* brands on sell ends */}



            {/* Why Choose Us Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-extrabold text-center mb-12 text-[#8D7B68] uppercase tracking-wide">
                        Why Choose Us
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

                        <div className="flex flex-col items-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#A4907C] rounded-full flex items-center justify-center">
                                <Search className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#8D7B68]">Extensive Brand List</h3>
                            <p className="text-center text-[#2B3440]">
                                Discover a curated list of trusted brands, all in one place, for your convenience.
                            </p>
                        </div>


                        <div className="flex flex-col items-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#A4907C] rounded-full flex items-center justify-center">
                                <Tag className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#8D7B68]">Exclusive Coupons</h3>
                            <p className="text-center text-[#2B3440]">
                                Access the best deals and promo codes exclusively verified for our users.
                            </p>
                        </div>


                        <div className="flex flex-col items-center gap-4 bg-[#F5F5F5] p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="w-20 h-20 bg-[#A4907C] rounded-full flex items-center justify-center">
                                <ShoppingBag className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold text-[#8D7B68]">Save Big</h3>
                            <p className="text-center text-[#2B3440]">
                                Shop smart, save money, and enjoy hassle-free shopping experiences.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* User Testimonials Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8 text-[#8D7B68]">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card bg-[#C8B6A6] shadow-lg rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-[#A4907C]"
                                    src="https://randomuser.me/api/portraits/men/1.jpg"
                                    alt="User 1"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-[#8D7B68]">Jane Doe</h4>
                                    <p className="text-sm text-[#A4907C]">Verified Shopper</p>
                                </div>
                            </div>
                            <p className="text-[#8D7B68]">
                                "The best platform for finding amazing discounts! I saved so much on my purchases thanks to their coupons."
                            </p>
                        </div>

                        <div className="card bg-[#C8B6A6] shadow-lg rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-[#A4907C]"
                                    src="https://randomuser.me/api/portraits/men/2.jpg"
                                    alt="User 2"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-[#8D7B68]">John Smith</h4>
                                    <p className="text-sm text-[#A4907C]">Frequent Buyer</p>
                                </div>
                            </div>
                            <p className="text-[#8D7B68]">
                                "I love how easy it is to find coupons here. The brands listed are some of my favorites, and I never shop without checking this site!"
                            </p>
                        </div>

                        <div className="card bg-[#C8B6A6] shadow-lg rounded-lg p-6">
                            <div className="flex items-center mb-4">
                                <img
                                    className="w-16 h-16 rounded-full border-2 border-[#A4907C]"
                                    src="https://randomuser.me/api/portraits/men/3.jpg"
                                    alt="User 3"
                                />
                                <div className="ml-4">
                                    <h4 className="text-lg font-bold text-[#8D7B68]">Emily Clark</h4>
                                    <p className="text-sm text-[#A4907C]">Happy Customer</p>
                                </div>
                            </div>
                            <p className="text-[#8D7B68]">
                                "This platform is a game changer! I’ve discovered so many deals and saved tons on my shopping."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* user ux ends */}


        </div>
    );
};

export default Home;