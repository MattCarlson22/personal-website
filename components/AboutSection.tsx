// components/AboutSection.tsx

const AboutSection = () => {
    return (
        <section className="rounded-lg py-12 bg-slate-800 text-center animate-slideUp px-8">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold mb-6 text-slate-200">About Me</h2>
                <div className="flex flex-col items-center md:flex-row md:items-start md:space-x-8">
                    <img 
                        src="/images/profile.jpg" 
                        alt="Profile Picture"
                        className="w-32 h-32 rounded-full mb-4 md:mb-0 md:w-48 md:h-48"
                    />
                    <p className="text-2xl text-slate-400 md:text-left">
                        Hello! My name is Matt, and I am an undergraduate Computer Science student at ASU and an intern at Fyresite in Tempe, AZ.
                        I have experience in Java, Javascript, C, C++, and Python, along with some experience in the React and NextJS frameworks.
                        I am also quite versed in Linux, and have been a user since 2018. My expected graduation date is May 2026.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;