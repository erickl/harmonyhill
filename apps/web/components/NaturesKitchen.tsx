import Link from 'next/link';
import Carousel from "@/components/Carousel";
import { EXT_LINKS } from '@/constants/links';
import styles from "./NaturesKitchen.module.css";

const images = [
    { src: "/images/marry-me-pasta.avif",       alt: "marry me pasta"        },
    { src: "/images/wingko-waffles-vegan.avif", alt: "vegan coconut waffles" },
    { src: "/images/sushi.avif",                alt: "Vegan Sushi"           },
    { src: "/images/floating-breakfast.avif",   alt: "floating breakfast"    },
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
                            href={EXT_LINKS.FOOD_MENU_HH}
                            target="_blank"
                            className="green-link"
                        >
                            our nourishing menu
                        </Link>.
                    </p>
                    <p>In addition to our menu and seasonal suggestions, our wonderful chef is entirely at your disposal
                        during your stay and would be more than happy to try out new recipes upon request.
                    </p>
                    <p>
                        Our kitchen is naturally kosher and halal, and we are more than happy to cater to jain requirements
                        on request. A large part of our menu is glutenfree and we are ready to cater to any food allergies
                        or sensitivities. Just contact us!
                    </p>
                </div>

                <Carousel images={images} options={{aspectRatio: "10/6"}} />
            </div>
        </section>
    );
}