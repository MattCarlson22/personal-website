// components/ProjectCard.tsx

interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, link }) => {
    return (
        <div className="bg-slate-800 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-slate-300 mb-4">{description}</p>
                <a 
                    href={link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-teal-500 hover:underline"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;