// pages/index.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutSection from "@/components/AboutSection";
import styles from '@/styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.main}>
                <h1 className={styles.title}>Welcome to My Portfolio</h1>
                <AboutSection />
            </main>
            <Footer />
        </div>
    );
}