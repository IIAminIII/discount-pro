import React from 'react';
import { Helmet } from 'react-helmet-async';




const AboutUs = () => {
    return (
        <>
        <Helmet>
                <title>DiscountPro | About</title>
            </Helmet>
        <div className="flex flex-col items-center justify-center mt-10">
            <div className="w-4/5 bg-[#8D7B68] text-white p-6 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
                <p className="text-lg leading-7">
                    Hi! I'm <span className="font-bold">Aminul Islam</span>, a passionate web developer with a love for creating user-friendly and visually appealing applications. With experience in both frontend and backend development, I specialize in building responsive and dynamic web applications.
                </p>
            </div>

            {/* Skills Section */}
            <div className="w-4/5 bg-[#A4907C] text-white p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-3xl font-bold mb-4">Skills</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>Proficient in JavaScript, React.js, and Node.js</li>
                    <li>Experience with Firebase for authentication and real-time databases</li>
                    <li>Skilled in Tailwind CSS and Bootstrap for modern UI design</li>
                    <li>Strong understanding of RESTful APIs and JSON data handling</li>
                    <li>Knowledge of version control using Git and GitHub</li>
                </ul>
            </div>

            {/* Projects Section */}
            <div className="w-4/5 bg-[#C8B6A6] text-black p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-3xl font-bold mb-4">Projects</h2>
                <ul className="list-disc list-inside text-lg">
                    <li>
                        <span className="font-bold">Discount PRO:</span> A coupon-collecting app for e-commerce stores in Bangladesh. Features authentication, dynamic routing, and responsive design.
                    </li>
                    <li>
                        <span className="font-bold">Task Manager App:</span> A productivity tool to manage tasks and deadlines with React and Firebase integration.
                    </li>
                    <li>
                        <span className="font-bold">E-Commerce Website:</span> A full-stack application with product browsing, cart management, and secure checkout functionality.
                    </li>
                </ul>
            </div>

            {/* Contact Section */}
            <div className="w-4/5 bg-[#8D7B68] text-white p-6 rounded-lg shadow-lg mt-8">
                <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
                <p className="text-lg">
                    Feel free to connect with me for collaboration or inquiries:
                </p>
                <ul className="list-none text-lg mt-4">
                    <li>Email: <span className="font-bold">whtdahellizdis@gmail.com</span></li>
                </ul>
            </div>
        </div>
        </>
    );
};

export default AboutUs;
