// pages/contact.tsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <div className="moving-lines">
            <Navbar />
            <main className="flex flex-col items-center min-h-screen py-12 animate-slideUp">
                <h1 className="text-5xl font-bold mb-8">Contact Me</h1>
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
}