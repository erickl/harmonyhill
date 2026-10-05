import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPinterestP, } from 'react-icons/fa';
import { Mail, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import { EXT_LINKS } from '../constants/links';

export default function Footer() {
    const iconSize = 30;

    return (
        <div>
            <section id="contact-us" className={styles.section}>
                <h2 className="section-title">Contact Us</h2>
                <div className="contact-us-text col-md-8">
                    <p><b>
                        For direct bookings, questions, suggestions or to discuss partnerships, please contact us on
                        {" "}<Link href={EXT_LINKS.WA_REF}>WhatsApp</Link>{" "} or
                        {" "}<Link href={EXT_LINKS.EMAIL_REF} target="_blank">harmonyhillbali@gmail.com</Link>{" "}
                        or reach out on social media.
                    </b></p>
                </div>
                <div className={styles.socialMediaIconsRow}>
                    <Link href="https://www.facebook.com/profile.php?id=61564303381449" target="_blank" className={styles.socialMedIcon}>
                        <FaFacebookF size={iconSize} />
                    </Link>

                    <Link href="https://www.instagram.com/harmonyhill.bali" target="_blank" className={styles.socialMedIcon} id="insta">
                        <FaInstagram size={iconSize} />
                    </Link>

                    <Link href="https://id.pinterest.com/harmonyhillbali/" target="_blank" className={styles.socialMedIcon}>
                        <FaPinterestP size={iconSize} />
                    </Link>

                    <Link href={EXT_LINKS.WA_REF} target="_blank" className={styles.socialMedIcon}>
                        <FaWhatsapp size={iconSize} />
                    </Link>

                    <Link href={EXT_LINKS.EMAIL_REF} target="_blank" className={styles.socialMedIcon}>
                        <Mail size={iconSize} />
                    </Link>

                    <Link href="https://maps.app.goo.gl/Rr4qEZ1YcKsJdUpE7" target="_blank" className={styles.socialMedIcon}>
                        <MapPin size={iconSize} />
                    </Link>
                </div>
            </section>

            <footer className={styles.rights}>
                <p>&copy; 2025 Harmony Hill. All rights reserved.</p>
            </footer>
        </div>
    );
}
