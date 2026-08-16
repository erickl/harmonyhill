import styles from "./AboutUs.module.css";
import Image from "next/image";

export default function AboutUs() {
    return (
        <section id="about-us" className={styles.aboutUsSection}>
            <div className={styles.aboutUsBody}>
                <div className={styles.textBody}>
                    <hr className={styles.divider} />
                    <h3 className={styles.aboutTitle}>
                        Where the jungle takes over,<br/>
                        and the rest of the world fades out
                    </h3>
                    <hr className={styles.divider} />
                    <p>At Harmony Hill, we believe the true essence of travel is the space to slow down and 
                        remember what matters. Here, we invite you to trade the frantic noise of the modern 
                        world for the vibrant hum of the jungle, and gently reconnect:</p>
                    <p>.....with the wonders of nature, tuning into the daily symphony of cicadas, rustling palms, and the evening chorus of frogs.</p>
                    <p>...with the food that nourishes your body, crafted entirely from vibrant, plant-based ingredients.</p>
                    <p>...with the beautiful Balinese people and the rich cultural heritage of our local village.</p>
                    <p>...with yourself, finding presence in the steady, living rhythm of the valley.</p>
                    <br />
                    <p>Harmony Hill and The Jungle Nook are our two beautiful, nature-immersed sanctuaries, tucked away in a traditional 
                        village in the heart of Bali. Perched gracefully upon a ridge overlooking a gorgeous valley and luscious rice fields, 
                        our location offers the perfect balance of seclusion and exploration. We are a scenic, peaceful 30-minute drive 
                        from both the bustling cultural hub of Ubud to the south, and the awe-inspiring volcanic landscapes of Mount Batur to the north.
                        <br /><br />
                        Our aim is to offer you a unique opportunity to connect with the untamed beauty of nature, while enjoying the comfort 
                        of our homes and the thoughtful service of our team.
                    </p>
                </div>

                <Image 
                    src="/images/hh-drone-1-small.avif"
                    alt="harmony hill from above"
                    width={500}
                    height={800}
                />
            </div>
        </section>
    );
}