'use client';

import Image from 'next/image';
import styles from "./RoundedImage.module.css"
import { ImageProps } from "@/types";

export default function RoundedImage({ src, alt, description, index }: ImageProps) {
    return (
        <div className={styles.imageWrapper}>
            <Image
                className={styles.roundedImg}
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
            />
            {description && (
                <div className={styles.caption}>
                    <span>
                        {description}
                    </span>
                </div>
            )}
        </div>
    );
}