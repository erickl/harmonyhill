import Link from 'next/link';
import styles from "./SubtleFloatingButton.module.css";
import { FaWhatsapp } from 'react-icons/fa';
import { CSSProperties } from 'react';
import { EXT_LINKS } from '../constants/links';

const style : CSSProperties = {
    display : "flex",
    flexDirection : "row",
    gap: "0.2rem"
};

export default function WhatsAppButtonSubtle() {
    return (
        <div className={styles.floatingAll}>
            <div className={styles.subtleFloatingButton}>
                <Link href={EXT_LINKS.WA_REF} target="_blank" className="social-med-icons" aria-label="WhatsApp link">
                    <div style={style}>
                        <FaWhatsapp size={25}/>
                    </div>
                </Link>
                
            </div>
            <p className={styles.text}>Book direct for the best rates</p>
        </div>
    );
}
