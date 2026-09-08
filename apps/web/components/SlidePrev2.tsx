import styles from "./SlidePrev2.module.css";
import { ChevronLeft } from 'lucide-react';

export default function SlidePrev({onClick} : { onClick: () => void }) {
    return (
        <button
            className={`${styles.emblaButton} ${styles.prev}`}
            onClick={onClick}
            aria-label="Previous slide"
        >
            <ChevronLeft size={30} />
        </button>
    );
}