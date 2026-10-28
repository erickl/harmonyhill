import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className={styles.aboutUsSection}>
            <div className={styles.aboutUsBody}>
                <div className={styles.textBody}>
                    <hr className={styles.divider} />
                    <h3 className={styles.aboutTitle}>
                        Where the jungle takes over,
                        and the rest of the world fades out
                    </h3>
                    <hr className={styles.divider} />

                    <div className={styles.desktopOnly}>
                        <br/><br/>
                    </div>
                    
                    <p>Harmony Hill and The Jungle Nook are our two beautiful, nature-immersed sanctuaries, tucked away in a traditional 
                        village in the heart of Bali. Perched gracefully upon a ridge overlooking a gorgeous valley and luscious rice fields, 
                        our location offers the perfect balance of seclusion and exploration. We are a scenic, peaceful 30-minute drive 
                        from both the bustling cultural hub of Ubud to the south, and the awe-inspiring volcanic landscapes of Mount Batur to the north.
                        <br /><br />
                        Our aim is to offer you a unique opportunity to connect with the untamed beauty of nature, while enjoying the comfort 
                        of our homes and the thoughtful service of our team.
                    </p>

                    <div className={styles.desktopOnly}>
                        <br/><br/><br/><br/><br/><br/>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image 
                        src="/images/hh-drone-1-small.avif"
                        alt="harmony hill from above"
                        fill
                        className={`${styles.image} ${styles.desktopOnly}`}
                        sizes="100vw"
                    />

                    <Image 
                        src="/images/hh-drone-front.avif"
                        alt="harmony hill from above"
                        fill
                        className={`${styles.image} ${styles.mobileOnly}`}
                        sizes="100vw"  
                    />
                </div>
            </div>
            
        </section>
    );
}