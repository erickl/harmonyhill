import styles from "./SlideNext.module.css";
import { ChevronRight } from 'lucide-react';

export default function SlideNext({onClick} : { onClick: () => void }) {
    return (
        <button
            className={`${styles.emblaButton} ${styles.next}`}
            onClick={onClick}
            aria-label="Next slide"
        >
            <ChevronRight size={30} />
        </button>
    );
}