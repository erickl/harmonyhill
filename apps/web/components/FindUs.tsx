import styles from "./FindUs.module.css";
import Image from "next/image";

export default function FindUs({}) {
    return (
        <section className={styles.findUsSection}>
            <div style={{ position: 'relative', width: '100%', height: '500px' }}>
                <Image 
                    src="/images/find-us-map.png"
                    className={styles.desktopOnly}
                    alt="find us here"
                    fill
                    style={{ 
                        objectFit: 'contain',
                        objectPosition: '40% 20%'
                    }}
                />
                <Image
                    src="/images/find-us-map-mobile.png"
                    className={styles.mobileOnly}
                    alt="find us here"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        // overwriting the width/height props
                        width: '100%',
                        height: '760px',
                        objectFit: 'contain',
                        objectPosition: '70% 20%'
                    }}
                />
            </div>
            <div className={styles.sectionBody}> 
                <h2 className={styles.findUsTitle}>
                    Find us in the heartlands of Bali
                </h2>

                <div className={styles.bodyText}>
                    5 min - Tirta Empul Water Temple
                    <br/>
                    <hr className={styles.line}/>
                    
                    8 min - Gunung Kawi, an 11th century temple complex
                    <br/>
                    <hr className={styles.line}/>
                    30 min - Ubud Palace
                    <br/>
                    <hr className={styles.line}/>
                    30 min - Kintamani with gorgeous volcano views
                    <br/>
                    <hr className={styles.line}/>
                    40 min - Lake Batur
                    <br/>
                    <hr className={styles.line}/>
                    Note: Travel times may vary with Bali traffic :)
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