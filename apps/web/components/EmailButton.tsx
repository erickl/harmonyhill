import { Mail } from 'lucide-react';
import styles from "./FloatingButton.module.css";
import { CSSProperties } from 'react';
import { EXT_LINKS } from '../constants/links';

const style : CSSProperties = {
    display : "flex",
    flexDirection : "row",
    gap: "0.2rem"
};

export default function EmailButton() {
    return (
        <a href={EXT_LINKS.EMAIL_REF} target="_blank" className={styles.floatingButton}>
            <div style={style}>
                <Mail />
                <span>Email</span>
            </div>
        </a>
    );
}
