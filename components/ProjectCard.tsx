// components/ProjectCard.tsx

import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;