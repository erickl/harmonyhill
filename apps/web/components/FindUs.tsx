import styles from "./FindUs.module.css";
import Image from "next/image";

export default function FindUs({}) {
    return (
        <section className={styles.findUsSection}>
            <Image 
                alt="Bali Tresure Map"
                src={"/images/bali-map.png"}
                width={500}
                height={700}
            />
            <div className={styles.sectionBody}>
                
            <h2 className={styles.findUsTitle}>
                Find us in the heartlands of Bali
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
                    <button className={styles.mapsButton}>
                        OPEN IN GOOGLE MAPS
                    </button>
                </div>
            </div>
        </section>
    );
}