// pages/projects.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import styles from '@/styles/Projects.module.css';

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
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.title}>My Projects</h1>
                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </main>
        </div>
    )
}