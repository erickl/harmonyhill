'use client';

import styles from "./WhatAwaitsYou.module.css";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import SlidePrev from '@/components/SlidePrev';
import SlideNext from '@/components/SlideNext';

export default function WhatAwaitsYou({}) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ 
        loop: false,
        align: 'start',
        dragFree: true,
    });

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section id="stay-in" className={styles.section}>
            <h2 className="section-title">
                What awaits you?
            </h2>

            <div className={styles.chapterList}>
                <SlidePrev 
                    onClick={scrollPrev}
                />

                <div className={styles.emblaViewport} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        <div className={styles.chapter}>
                            <Image 
                                src="/images/dewa-juice.avif"
                                alt="Javanese jamu"
                                width="400"
                                height="540"
                            />
                            <div className={styles.chapterAbout}>
                                <h3>
                                    Your Dedicated Villa Team
                                </h3>
                                <span className={styles.chapterText}>
                                    Personalized care, whenever you need it.<br/> 
                                    From the moment you wake,our team is<br/> 
                                    ready to assist, whether that’s our lovely <br/>  
                                    chef preparing your meals, daily <br/> 
                                    housekeeping, or arranging local<br/>  
                                    excursions. We handle every detail during<br/> 
                                    the day, giving you full-service support<br/> 
                                     with total privacy when you need it.<br/> 
                                </span>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image 
                                src="/images/sushi-close.avif"
                                alt="Vegan sushi"
                                width="300"
                                height="533"
                            />
                            <div className={styles.chapterAbout}>
                                <h3>
                                    Nature’s Kitchen
                                </h3>
                                <span className={styles.chapterText}>
                                    At Harmony Hill, every meal is an essential<br/>  
                                    part of your sanctuary experience. We are on<br/>  
                                    a constant mission to curate the finest locally<br/>  
                                    grown, healthful, and delightful ingredients.<br/>  
                                    Rooted in a philosophy of conscious living, our<br/>
                                    kitchen honors a full-circle connection to the<br/> 
                                    earth. We minimize our ecological footprint<br/> 
                                    while maximizing your well-being, proving<br/>
                                    that thoughtful hospitality and deep<br/>
                                    nourishment can go hand in hand.<br/> 
                                </span>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <div 
                                style={{ height: '533px', width: '300px', backgroundColor: 'transparent' }}
                            />
                        </div>
                    </div>
                </div>

                <SlideNext 
                    onClick={scrollNext}
                />
            </div>
        </section>
    );
}