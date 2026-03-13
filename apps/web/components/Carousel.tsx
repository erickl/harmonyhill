'use client';
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // Or your React Icons
import styles from "./Carousel.module.css";

const images = [
    { src: '/images/ricefield1.webp', alt: 'Harmony Hill Rice Fields' },
    { src: '/images/villa-interior.webp', alt: 'Villa Interior' },
    { src: '/images/pool-view.webp', alt: 'Infinity Pool' },

    // villa 1
    { src: '/images/pool-deck-view-smaller.avif', alt: 'Infinity Pool', description: "How about some forest bathing?" },
    { src: '/images/bdr-3-villa-1.jpeg', alt: 'bed room', description: "Let the early morning light wash over your face as you wake up" },
    { src: '/images/living-room-villa-1.avif', alt: 'spacious living room', description: "Convene with your family and friends over breakfast, in this spacious, brightliving room" },
    { src: '/images/villa-1-taking-bath.avif', alt: 'luxurious copper bath tub',  description: "Take a relaxing hot soak in a handmade copper bathtub"},
    { src: '/images/infinity-pool-view.webp', alt: 'jungle infinity pool',  description: "Indulge in an afternoon dip after a long day of relaxing or adventures"},


];

//className="img-fluid"     className="carousel-caption   className="custom-rounded-img"    className="carousel-inner
//className="carousel-item active"     className="carousel-item"

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <div className={styles.embla} id="villa-carousel">
            {/* 1. Viewport (The "Window") */}
            <div className={styles.emblaViewport} ref={emblaRef}>
                {/* 2. Container (The long strip of images) */}
                <div className={styles.emblaContainer}>
                {images.map((img, index) => (
                    <div className={styles.emblaSlide} key={index}>
                        <Image 
                            src={img.src} 
                            alt={img.alt} 
                            fill 
                            className={styles.emblaImg} 
                        />
                    </div>
                ))}
                </div>
            </div>

            {/* 3. Navigation Buttons */}
            <button className={`${styles.emblaButton} ${styles.prev}`} onClick={scrollPrev}>
                <ChevronLeft size={30} />
            </button>
            <button className={`${styles.emblaButton} ${styles.next}`} onClick={scrollNext}>
                <ChevronRight size={30} />
            </button>
        </div>
    );
}