'use client';

import styles from "./OurVillas.module.css";
import Carousel from "./Carousel";

export default function OurVillas() {
    return (
        <section id="our-villas" className={styles.sectionBackground}>
            <h2 className="section-title">Our Villas</h2>
            <div className="row align-items-center">
            
                <h3 className="section-title">Harmony Hill</h3>
                <span>The perfect retreat for families or groups. Our expansive villa features three private
                    bedrooms, each with its own ensuite bathroom. Designed with soaring 5-meter
                    ceilings, the home flows onto a grand wooden deck overlooking a private infinity pool suspended over
                    the emerald rice paddies and lush jungle valley.
                </span>

                <div className={styles.featuresContainer}>
                    <div className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M2 17h20M2 8v9M22 8v9M2 11h20" />
                            <path d="M6 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                            <path d="M12 11V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
                        </svg>
                        <div className={styles.featureLabel}>3 Bedrooms</div>
                        <div className={styles.featureDetail}>King-sized comfort</div>
                    </div>

                    <div className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M3 11h18c.6 0 1 .4 1 1v2c0 3.3-2.7 6-6 6H8c-3.3 0-6-2.7-6-6v-2c0-.6.4-1 1-1Z" />
                            <path d="M7 20v2" />
                            <path d="M17 20v2" />
                            <path d="M19 11V7a2 2 0 0 0-2-2h-1" />
                        </svg>
                        <div className={styles.featureLabel}>3 Ensuites</div>
                        <div className={styles.featureDetail}>2 with signature tubs</div>
                    </div>

                    <div className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path
                                d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                            <path
                                d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                            <path
                                d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
                        </svg>
                        <div className={styles.featureLabel}>Infinity Pool</div>
                        <div className={styles.featureDetail}>Private & jungle-facing</div>
                    </div>

                    <div className={styles.featureItem}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.2" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path d="M6 18h12l-1-8a5 5 0 0 0-10 0l-1 8Z" />
                            <path d="M9 18v3" />
                            <path d="M15 18v3" />
                            <path d="M17 10h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
                        </svg>
                        <div className={styles.featureLabel}>Private Chef</div>
                        <div className={styles.featureDetail}>100% plant-based</div>
                    </div>
                </div>
            
                <Carousel />

                <div className="see-more-here">
                    <br />
                    <a href="harmonyhill-gallery.html">See more from the villa gallery &rarr;</a>
                </div>
            </div>
        </section>
    );
}