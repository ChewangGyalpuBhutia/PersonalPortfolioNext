"use client"
import React from 'react';
import Navbar from '@/components/NavBar';
import Image from 'next/image';
import colorSharp from '../../assets/color-sharp.png';
import Rewardwise from '../../assets/logo.png';
// import 'animate.css';

const ExperiencePage = () => {
    const tags = ["React", "Node.js", "AWS", "Django", "React Native"];

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow mt-10">
                <section className="experience py-16 relative" id="experience">
                    <div className="container mx-auto px-4 md:px-20 lg:px-40">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold animate__animated animate__fadeInDown">Experience</h2>
                            <p className="mt-4 animate__animated animate__fadeInDown">A glimpse into my career journey</p>
                        </div>
                        <div className="timeline-container">
                            <div className="py-5">
                                <ul className="timeline">
                                    <li className="timeline-item mb-5 animate__animated animate__fadeInLeft">
                                        <div className="bg-gray-900 border border-purple-600 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
                                            <div className="flex items-center mb-4">
                                                <div className="mr-4">
                                                    <Image className="w-16 h-16 rounded-full" src={Rewardwise} alt="Rewardwise Logo" />
                                                </div>
                                                <div>
                                                    <h5 className="text-xl font-bold text-white">Full Stack Developer</h5>
                                                    <p className="text-gray-400">Rewardwise.co<br />February 2024</p>
                                                </div>
                                            </div>
                                            {/* <div className="flex justify-start mb-4">
                                                <a href="https://play.google.com/store/apps/details?id=co.rewardwise&hl=en_IN&pli=1" target="_blank" rel="noopener noreferrer">
                                                    <button className="mt-4 px-6 py-2 border-2 border-[#9333ea] text-white rounded-full flex items-center hover:bg-gradient-to-r from-purple-500 to-blue-500 transition duration-300">App</button>
                                                </a>
                                            </div> */}
                                            <p className="text-gray-400">
                                                As a Full Stack Developer, I design intuitive user interfaces, build and manage microservices using AWS, develop websites, implement REST APIs with Django, and oversee CI/CD pipelines to ensure scalable and efficient application delivery. I contributed to the development of an Android application using React Native for the frontend and Django for the backend, implementing OTP authentication for secure user logins. I also integrated email and OTP login functionality and developed a KYC verification module for user identity validation. Additionally, I played a key role in web development and managed deployments via AWS to ensure smooth, scalable operations.
                                            </p>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {tags.map((tag, index) => (
                                                    <span key={index} className="text-sm font-medium text-purple-600 bg-purple-200 rounded-full px-3 py-1">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </li>
                                    {/* Add more timeline items here if needed */}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="absolute bottom-0 left-0 w-full">
                        <Image src={colorSharp} alt="Skills-background" className="w-full" />
                    </div> */}
                </section>
            </main>
        </div>
    );
};

export default ExperiencePage;