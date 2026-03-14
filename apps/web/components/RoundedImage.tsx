'use client';

import Image from 'next/image';
import styles from "./RoundedImage.module.css"

interface RoundedImageProps {
    src: string;
    alt: string;
    description?: string;
}

export default function RoundedImage({ src, alt, description }: RoundedImageProps) {
    return (
        <div className={styles.imageWrapper}>
            <Image
                className={styles.roundedImg}
                src={src}
                alt={alt}
                fill 
            />
            <div className={styles.caption}>
                <p>
                    {description}
                </p>
            </div>
        </div>
    );
}