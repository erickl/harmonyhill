import Link from 'next/link';
import styles from "./SubtleFloatingButton.module.css";
import { FaWhatsapp } from 'react-icons/fa';
import { CSSProperties } from 'react';

const style : CSSProperties = {
    display : "flex",
    flexDirection : "row",
    gap: "0.2rem"
};

export default function WhatsAppButtonSubtle() {
    //href="https://wa.me/message/TVA3I5GFI5VLO1"

    const message = "Hi! I'm interested in staying at Harmony Hill";
    const encodedMessage = encodeURIComponent(message);
    const waNumber = "6287789040323";
    const waRef = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    return (
        <div className={styles.subtleFloatingButton}>
            <Link href={waRef} target="_blank" className="social-med-icons" aria-label="WhatsApp link">
                <div style={style}>
                    <FaWhatsapp size={25}/>
                </div>
            </Link>
        </div>
    );
}
