"use client"
import React from 'react';
import Navbar from '@/components/NavBar';
import { Projects } from './projects'; // Assuming you have a projects.js file with the data
import Image, { StaticImageData } from 'next/image';


interface Project {
  id: number;
  title: string;
  agenda: string;
  date: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  github: string;
  website?: string;
}

const ProjectCard: React.FC<Project> = ({ id, title, agenda, date, description, image, tags, github, website }) => {
  return (
    <div className="bg-gray-900 border border-purple-600 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <Image className="w-16 h-16 rounded-full" src={image} alt={title} width={64} height={64} />
        </div>
        <div>
          <h5 className="text-xl font-bold text-white">{title}</h5>
          <p className="text-gray-400">{agenda}</p>
          <p className="text-gray-400">{date}</p>
        </div>
      </div>
      <p className="text-gray-400">
        {description}
      </p>
      <div className="flex justify-between mt-4">
        <a href={github} className="text-[#9333ea] border-2 border-[#9333ea] hover:text-white hover:border-white rounded-full px-4 py-2 transition duration-300">Code</a>
        {website && <a href={website} className="text-[#9333ea] border-2 border-[#9333ea] hover:text-white hover:border-white rounded-full px-4 py-2 transition duration-300">Website</a>}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="text-sm font-medium text-green-500 border border-green-500 bg-transparent rounded-full px-3 py-1 tag-glare">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const ProjectPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow mt-10">
        <section className="projects py-16 relative" id="projects">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Projects</h2>
              <p className="mt-4">Check out my projects below</p>
              <div className="border-b-2 border-purple-600 w-24 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectPage;