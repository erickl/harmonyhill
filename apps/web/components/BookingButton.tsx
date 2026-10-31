import Link from 'next/link';
import styles from "./FloatingButton.module.css";

export default function BookingButton() {
    return (
        <div className={styles.floatingButton}>
            <a href="/book" target="_blank" rel="noopener">
                Book now! &hearts;
            </a>
        </div>
    );
}
