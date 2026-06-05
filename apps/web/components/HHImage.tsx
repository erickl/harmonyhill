'use client';

import Image from 'next/image';
import styles from "./HHImage.module.css"
import { ImageProps } from "@/types";

export default function HHImage({ src, ...props }: ImageProps) {
    let imgStyle = `${styles.imgGeneral}`;

    if (props.options?.rounded === true) {
        imgStyle += ` ${styles.rounding}`;
    }

    return (
        <div className={styles.imageWrapper} 
            style={{ aspectRatio: props.aspectRatio ?? "16/9" }}
        >
            <Image
                className={imgStyle}
                src={src}
                alt={props.alt ?? ""}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                // Pre load only the first picture, if this image is in a carousel
                priority={props.options?.index === 0}
            />
            {props.description && (
                <div className={styles.caption}>
                    <span>
                        {props.description}
                    </span>
                </div>
            )}
        </div>
    );
}