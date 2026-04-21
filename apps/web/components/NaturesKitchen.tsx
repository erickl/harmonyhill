'use client';

import Link from 'next/link';
import Carousel from "@/components/Carousel";
import styles from "./NaturesKitchen.module.css";

const images = [
    {src: "/images/marry-me-pasta.avif", alt: "marry me pasta" },
    {src: "/images/wingko-waffles-vegan.avif", alt: "vegan coconut waffles" },
    {src: "/images/sushi.avif", alt: "Vegan Sushi" },
    {src: "/images/floating-breakfast.avif", alt: "floating breakfast" },
];

export default function NaturesKitchen() {
    return (
        <section id="natures-kitchen" className={styles.section}>
            <div className={styles.content}>
                <div className={styles.textBody}>
                    <h2 className="section-title">Nature's Kitchen</h2>
                    <p>Our food is 100% plant-based. We are on a constant mission to curate for our guests the best
                        locally-grown, healthful and delightful ingredients.
                    </p>
                    <p>Discover
                        {" "}<Link 
                            href="https://www.canva.com/design/DAGZCJNzgeA/L9Tz7Y8pdyin1PZQ9KeN7Q/view?utm_content=DAGZCJNzgeA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h99deea3dde" 
                            target="_blank" 
                            className="green-link"
                        >
                            our nourishing menu
                        </Link>.
                    </p>
                    <p>In addition to our menu and seasonal suggestions, our wonderful chef is entirely at your disposal
                        during your stay and would be more than happy to try out new recipes upon request. </p>
                </div>

                <Carousel images={images}/>
            </div>
        </section>
    );
}