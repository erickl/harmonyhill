import Carousel from "./Carousel";
import styles from "./ResponsiveGallery.module.css";
import HHImage from './HHImage';
import LazySection from "./LazySection";
import { Deck } from "@/types";

export default function ResponsiveGallery({ style, images, options }: Deck) {
    return (
        <div>
            <div className={styles.hideOnBigScreens}>
                <LazySection>
                    <Carousel images={images} />
                </LazySection>
            </div>

            <div className={styles.hideOnSmallScreens}>
                {images.map((image, index) => {
                    return <HHImage
                        key={`image-${index}`}
                        {...image}
                    />
                })}
            </div>
        </div>
    )
}