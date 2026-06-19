'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from "./HeroVideo.module.css";

export default function HeroVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Defer video loading until after initial paint
        const loadVideo = () => {
            const desktop = document.createElement('source');
            desktop.src = '/images/hero-video.mp4';
            desktop.type = 'video/mp4';
            desktop.media = '(min-width: 768px)';

            const mobile = document.createElement('source');
            mobile.src = '/images/hero-video-mobile.mp4';
            mobile.type = 'video/mp4';

            video.appendChild(desktop);
            video.appendChild(mobile);
            video.load();
            video.play().catch(() => { });
        };

        if (document.readyState === 'complete') {
            // Page already loaded (e.g. client-side navigation)
            loadVideo();
        } else {
            window.addEventListener('load', loadVideo, { once: true });
            return () => window.removeEventListener('load', loadVideo);
        }
    }, []);

    return (
        <div 
            className={styles.heroContainer}
            style={{ position: 'relative', width: '100%', overflow: 'hidden', backgroundColor: '#000' }}
        >
            <Image
                src="/images/hero-video-fallback.avif"
                alt="Harmony Hill Villa"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                style={{ objectFit: 'cover' }}
            />
            <video 
                ref={videoRef} 
                loop muted playsInline preload="none"
                className={styles.heroContainer} 
                style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, objectFit: 'cover' }}
            />
                
            <div className={styles.overlay}>
                <Image 
                    src="/images/logo-white-transparent-background.avif" 
                    alt="Harmony Hill Logo" 
                    width="540" height="540"
                    className={styles.logo} 
                />

                <h1 className={styles.slogan}>
                    Two Private Villas in the heart of Bali <br />
                    100% Vegan
                </h1>
            </div>
        </div >
    );
}