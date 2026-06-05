import Link from 'next/link';
import Carousel from "./Carousel";
import styles from "./Explore.module.css";
import HHImage from './HHImage';
import LazySection from "./LazySection";

const options = {rounded: true }
const images = [
    { src: "/images/gunung-kawi.avif",     alt: "Gunung Kawi", aspectRatio: "10/6",  options: options, description: "Immerse yourself in the sacred stillness of Gunung Kawi, the Valley of The Balinese Kings, or partake in a purification ritual at Tirta Empul, Bali's largest spring water temple. Both just 5mins drive away" },
    { src: "/images/barong2.avif",         alt: "Barong Bali", aspectRatio: "10/6",  options: options, description: "Get lost in the bustling town of Ubud - Bali's cultural heartland and our personal vegan food heaven. We are happy to share our favorite eats or organize a driver to take you around this beautiful town." },
    { src: "/images/batur-optimized.avif", alt: "Kintamani",   aspectRatio: "10/6",  options: options, description: "Hike up Mount Batur and watch the sun rise over Bali's most sacred Mount Agung, or take a thrilling jeep tour through the lava fields in this UNESCO GeoPark" },
];

export default function Explore() {
    return (
        <section id="explore" className={styles.sectionBackground}>
            <h2 className="section-title">Explore</h2>
            <p>Our team will be more than happy to help you plan excursions to Bali's most beloved spots as well as local
                hidden gems.
            </p>

            <div className={styles.hideOnBigScreens}>
                <LazySection>
                    <Carousel images={images} />
                </LazySection>
            </div>

            <div className={styles.hideOnSmallScreens}>
                {images.map((image, index) => {
                    return <HHImage
                        key={`explore-image-${index}`}
                        {...image}
                    />
                })}
            </div>

            <div className={styles.seeMoreText}>
                <br />
                <Link href="/activities" target="_blank">
                    Get inspired on what to do in and around Harmony Hill &rarr;
                </Link>
            </div>
        </section>
    )
}
