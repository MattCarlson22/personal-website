// pages/projects.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";

const projects = [
    {
        title: 'QR Code Generator',
        description: 'Simple QR Code generator made in React',
        image: '/images/project1.png',
        link: 'https://github.com/MattCarlson22/qr-code-generator'
    },
    {
        title: 'Sunrise Sunset Time Checker',
        description: 'Finds the sunrise and sunset time for any location in the world.',
        image: '/images/project2.png',
        link: 'https://github.com/MattCarlson22/sunrise-sunset-time-finder'
    },
    {
        title: 'MyMLS',
        description: 'Scrapes the MLS to find good buys in the Phoenix Metro Area. Made in collaboration with Noah DeZutter and Andrew Erting',
        image: '/images/project3.png',
        link: 'https://github.com/ndezutter19/mymls'
    },
    {
        title: 'Simian Minecraft Mod',
        description: 'Minecraft mod that adds Orangutans to the game',
        image: '/images/project4.png',
        link: 'https://google.com'
    },
    // add more projects here
];

export default function Projects() {
    return (
        <div className="moving-lines">
            <Navbar />
            <main className="flex flex-col items-center min-h-screen py-12 px-4 md:px-8">
                <h1 className="text-5xl font-bold mb-8 animate-slideUp">My Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slideUp">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}