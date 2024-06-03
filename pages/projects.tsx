// pages/projects.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: 'Project 1',
        description: 'Description for Project 1',
        image: '/images/project1.png',
        link: 'https://google.com'
    },
    // add more projects here
];

export default function Projects() {
    return (
        <div>
            <Navbar />
            <main className="flex flex-col items-center min-h-screen py-12">
                <h1 className="text-5xl font-bold mb-8 animate-slideUp">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </main>
        </div>
    )
}