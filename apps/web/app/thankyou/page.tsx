'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./thankYou.module.css";

export const metadata = {
    title: 'Thank You For Booking | Harmony Hill Bali',
    alternates: {
        canonical: '/thankyou',
    },
}

export default function ThankYou() {
    const mobileVideo = { src: "/images/hero-video-mobile.mp4", height: 406, width: 720 };
    const desktopVideo = { src: "/images/hero-video.mp4", height: 1080, width: 1920 };

    const [video, setVideo] = useState(mobileVideo);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        setVideo(isMobile ? mobileVideo : desktopVideo);
    }, []);

    return (
        <main>
            <div className={styles.heroContainer}>
                <Image
                    src="/images/hero-video-fallback.avif"
                    alt="Harmony Hill Villa"
                    fill
                    priority={true}
                    fetchPriority="high"
                    className="object-cover"
                />
                <video autoPlay loop muted playsInline
                    className={styles.videoElement}
                    // poster="/images/hero-video-fallback.avif"
                    width={video.width} height={video.height}>
                    <source
                        src={video.src}
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

                    <h1 className={styles.thankYouNote}>
                        Thank you for choosing Harmony Hill. Our team will be in touch with you shortly to
                        coordinate payment and finalize your reservation. For any questions or requests,
                        please contact us via
                        {" "}<Link href="mailto:harmonyhillbali@gmail.com" target="_blank">email</Link>{" "}
                        or {" "}<Link href="https://wa.me/message/TVA3I5GFI5VLO1" target="_blank">WhatsApp</Link>.
                        We can’t wait to welcome you!
                    </h1>
                </div>
            </div>
        </main>
    );
}