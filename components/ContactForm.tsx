// components/ContactForm.tsx

import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
    return (
        <form className={styles.form}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>

            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send</button>
        </form>
    );
};

export default ContactForm;