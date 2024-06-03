// pages/contact.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import styles from "@/styles/Contact.module.css"

export default function Contact() {
    return (
        <div className={styles.container}>
            <Navbar />
            <main className={styles.container}>
                <h1 className={styles.title}>Contact Me</h1>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}