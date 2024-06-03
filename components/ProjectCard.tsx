// components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
};

export default ProjectCard;