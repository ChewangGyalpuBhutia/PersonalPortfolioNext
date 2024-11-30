"use client"
import React from 'react';
import Navbar from '@/components/NavBar';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from 'next/image';
import colorSharp from '../../assets/color-sharp.png'
import { skills } from './constants';

const SkillsPage = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow mt-8">
                <section className="skill py-16 relative" id="skills">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white">Skills</h2>
                            <p className="text-gray-400 mt-4">Here are the skills I've developed over the years</p>
                        </div>
                        <div className="box flex justify-center">
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel m-2 owl-theme skill-slider">
                                {skills.map((skill) => (
                                    <div key={skill.id} className="p-4">
                                        <div className="bg-gray-900 border border-purple-600 shadow-lg rounded-lg p-6">
                                            <div className="skill-title text-xl font-semibold text-white mb-4">{skill.title}</div>
                                            <div className="skill-list grid grid-cols-2 gap-4">
                                                {skill.skills.map((item, index) => (
                                                    <div key={index} className="skill-item flex flex-col items-center text-white">
                                                        <img src={item.image} alt="skills-icon" className="w-12 h-12 mb-2" />
                                                        <span className="text-sm">{item.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
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

export default SkillsPage;