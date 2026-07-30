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
                                width={300}
                                height={533}
                                style={{ 
                                    objectFit: 'cover',
                                    objectPosition: '70% 30%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3>
                                    Your Dedicated Villa Team
                                </h3>
                                <span className={styles.chapterText}>
                                    Personalized care, whenever you need it.<br/> 
                                    From the moment you wake, our team is<br/> 
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
                                width={300}
                                height={533}
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
                            <Image 
                                src="/images/rice-paddy-tour.avif"
                                alt="Rice paddy tour"
                                width={300}
                                height={533}
                                style={{ 
                                    objectFit: 'cover',
                                    objectPosition: '80% 30%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3>
                                    Experience Authentic Bali
                                </h3>
                                <span>
                                    Harmony Hill is deeply rooted in the heart of a<br /> 
                                    traditional Balinese village, far removed from the<br /> 
                                    crowded resort hubs. We believe the best way to <br />
                                    experience our island home is through the eyes <br />
                                    of those who live here. To welcome you into our <br />
                                    community, we invite all our guests to join us on a <br />
                                    complimentary village, rice field, and waterfall <br />
                                    walk. Led by our local team, it’s an intimate <br />
                                    invitation to learn about Balinese culture, share <br />
                                    stories, and experience the quiet wonder of our <br />
                                    island as a welcomed guest, not just a visitor.<br />
                                </span>
                                <ul>
                                    <li>
                                        Life in the Village: Stroll through our local <br />
                                        pathways as we share the rhythms, traditions, <br />
                                        and timeless philosophy that shape Balinese <br />
                                        daily life and culture.
                                    </li>
                                    <li>
                                        Sacred Landscapes: Wander through lush, <br />
                                        hand-carved rice paddies and follow quiet <br />
                                        trails through the tropical valley.
                                    </li>
                                    <li>
                                        Hidden Waters: Cool down at a serene local <br />
                                        waterfall nestled deep in the greenery—a <br />
                                        peaceful spot known mostly to our community.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image 
                                src="/images/breakfast-nook-cat.avif"
                                alt="Rice paddy tour"
                                width={330}
                                height={533}
                                style={{ 
                                    objectFit: 'cover',
                                    objectPosition: '50% 20%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3>
                                    Morning Rituals & In-Villa Refreshments
                                </h3>
                                <ul>
                                    <li>
                                        <strong>A Warm Welcome:</strong> Upon your arrival, enjoy a <br/>
                                        fresh, vibrant basket of local seasonal tropical fruits, <br/>
                                        thoughtfully prepared to welcome you to the valley.

                                    </li>
                                    <li>
                                        <strong>Complimentary Nourishing Breakfast:</strong> Each morning, <br/>
                                        savor a freshly prepared 100% plant-based breakfast <br/>
                                        crafted by our chef. Choose from signature favorites <br/>
                                        like our creamy chia pudding, double-topped <br/>
                                        avocado/scramble toast or scrumptious Indonesian<br/>
                                        waffles
                                    </li>
                                    <li>
                                        <strong>Artisanal Wanagiri Coffee:</strong> To keep you energized <br/>
                                        throughout your stay, your villa is fully stocked with <br/>
                                        unlimited 100% Arabica coffee from the high-altitude <br/>
                                        region of Wanagiri. Grind and brew your own fresh <br/>
                                        cup whenever you wish, enjoyed right on your private <br/>
                                        terrace.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* Empty chapter to enable user to see the last chapter clearly */}
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