// components/SocialMediaSection.tsx

import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const SocialMediaSection = () => {
    return (
        <section className="rounded-lg py-12 bg-slate-800 text-center mt-8 animate-slideUp px-8">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-slate-200">My Socials</h2>
                <div className="flex flex-col items-center space-y-4 md:flex-row md:items-start md:space-x-8 md:space-y-0">
                    <a href="https://www.instagram.com/matthew_a_carlson/" className="text-2xl text-slate-400 flex items-center space-x-2 md:text-left">
                        <FaInstagram className="mr-1" />
                        <span>Instagram</span>
                    </a>
                    <a href="https://www.linkedin.com/in/matthew-carlson-b2230b2b3/" className="text-2xl text-slate-400 flex items-center space-x-2 md:text-left">
                        <FaLinkedin className="mr-1" />
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://github.com/MattCarlson22" className="text-2xl text-slate-400 flex items-center space-x-2 md:text-left">
                        <FaGithub className="mr-1" />
                        <span>Github</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialMediaSection;
