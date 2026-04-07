import { Mail } from 'lucide-react';
import styles from "./FloatingButton.module.css";
import { CSSProperties } from 'react';

const style : CSSProperties = {
    display : "flex",
    flexDirection : "row",
    gap: "0.2rem"
};

export default function EmailButton() {
    const email = "harmonyhillbali@gmail.com";
    const encodedSubject = encodeURIComponent("Inquiry about Harmony Hill Bali");
    const encodedMessage = encodeURIComponent("Hi! I'm interested in staying at Harmony Hill");
    const emailRef = `mailto:${email}?subject=${encodedSubject}&body=${encodedMessage}`;

    return (
        <a href={emailRef} target="_blank" className={styles.floatingButton}>
            <div style={style}>
                <Mail />
                <span>Email</span>
            </div>
        </a>
    );
}
