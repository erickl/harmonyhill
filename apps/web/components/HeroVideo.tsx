'use client';

import Image from 'next/image';
import styles from "./HeroVideo.module.css";

export default function HeroVideo() { 
    return (
        <div className={styles.heroContainer}>
            <Image
                src="/images/hero-video-fallback.avif"
                alt="Harmony Hill Villa"
                fill
                priority={true}
                fetchPriority="high"
                className="object-cover"
            />
            <video autoPlay loop muted playsInline className={styles.videoElement}>
                {/* Desktop Source: Loaded only if the screen is 768px or wider */}
                <source 
                    src="/images/hero-video.mp4" 
                    type="video/mp4" 
                    media="(min-width: 768px)" 
                />
                {/* Mobile Source: Fallback for anything smaller */}
                <source 
                    src="/images/hero-video-mobile.mp4" 
                    type="video/mp4" 
                />  
            </video>
            <div className={styles.overlay}>
                <Image 
                    src="/images/logo-white-transparent-background.avif" 
                    alt="Harmony Hill Logo" 
                    width="540" height="540"
                    priority={true}
                    fetchPriority="high"
                    className={styles.logo} 
                />

                <h1 className={styles.slogan}>
                    Two Private Villas in the heart of Bali <br />
                    100% Vegan
                </h1>
            </div>
        </div>
    );
}