// pages/index.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import SocialMediaSection from "@/components/SocialMediaSection";

export default function Home() {
    return (
        <div className="moving-lines">
            <Navbar />
            <main className="flex flex-col items-center min-h-screen py-12">
                <h1 className="text-5xl font-bold mb-8 animate-slideUp">Home</h1>
                <AboutSection />
                <SocialMediaSection />
            </main>
            <Footer />
        </div>
    );
}