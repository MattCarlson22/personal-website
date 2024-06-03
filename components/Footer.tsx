// components/Footer.tsx

import styles from "../styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; {new Date().getFullYear()} Matt Carlson. All rights reserved</p>
        </footer>
    );
};

export default Footer;