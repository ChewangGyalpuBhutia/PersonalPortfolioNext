"use client"
import React from 'react';
import Navbar from '@/components/NavBar';
import { education } from './constants';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';

interface Education {
    id: number;
    img: string;
    school: string;
    date: string;
    grade: string;
    desc: string;
    degree: string;
}

const EducationCard = ({ education }: { education: Education }) => {
    return (
        <div className="bg-gray-900 border border-purple-600 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
            <div className="flex items-center mb-4">
                <div className="mr-4">
                    <img className="w-16 h-16 rounded-full" src={education.img} alt={education.school} />
                </div>
                <div>
                    <h5 className="text-xl font-bold text-white">{education.degree}</h5>
                    <p className="text-gray-400">{education.school}<br />{education.date}</p>
                </div>
            </div>
            <p className="text-gray-400">
                {education.desc}
            </p>
            <p className="text-gray-400 mt-2">
                <strong>Grade:</strong> {education.grade}
            </p>
        </div>
    );
};

const EducationPage = () => {
    return (
        <div className="min-h-screen flex flex-col ">
            <Navbar />
            <main className="flex-grow mt-10">
                <section className="education py-16 relative" id="education">
                    <div className="container mx-auto px-4 md:px-20 lg:px-40">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold ">Education</h2>
                            <p className="mt-4 ">My educational journey has been a path of self-discovery and personal growth.</p>
                        </div>
                        <div className="timeline-container flex justify-center">
                            <div className="py-5 w-full max-w-4xl">
                                <Timeline position="alternate">
                                    {education.map((edu, index) => (
                                        <TimelineItem key={index}>
                                            <TimelineSeparator>
                                                <TimelineDot variant="outlined" color="secondary" />
                                                {index < education.length - 1 && <TimelineConnector />}
                                            </TimelineSeparator>
                                            <TimelineContent sx={{ py: '12px', px: 2 }}>
                                                <EducationCard key={edu.id} education={edu} />
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))}
                                </Timeline>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default EducationPage;