import styles from "./FindUs.module.css";
import Image from "next/image";

export default function FindUs({}) {
    return (
        <section className={styles.findUsSection}>
            <Image 
                src="/images/find-us-map.png"
                alt="find us here"
                width={600}
                height={533}
                style={{ 
                    objectFit: 'cover',
                    objectPosition: '40% 20%'
                }}
            />
            <div className={styles.sectionBody}>
                
            <h2 className={styles.findUsTitle}>
                Find us in the <br/>heartlands of Bali
            </h2>
                <div className={styles.bodyText}>
                    5 min - Tirta Empul Water Temple
                    <br/><br/>
                    10 min - Gunung Kawi and The Valley of Kings
                    <br/><br/>
                    30 min - Ubud
                    <br/><br/>
                    30 min - Batur
                    <br/><br/>
                    Maniktawang, Tampaksiring
                    <br/>
                    80552 Bali, Indonesia
                    <br/><br/>
                    
                    <a 
                        href="https://maps.app.goo.gl/CQWqgPz2JoxfKxji8" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button 
                            className={styles.mapsButton}
                        >
                            OPEN IN GOOGLE MAPS
                        </button>
                    </a>    
                </div>
            </div>
        </section>
    );
}