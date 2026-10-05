'use client';

import styles from "./WhatAwaitsYou.module.css";
import Image from "next/image";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback } from 'react';
import SlidePrev2 from '@/components/SlidePrev2';
import SlideNext2 from '@/components/SlideNext2';

export default function WhatAwaitsYou({ }) {
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
                <div className={styles.navigators}>
                    <SlidePrev2
                        onClick={scrollPrev}
                    />
                </div>

                <div className={styles.emblaViewport} ref={emblaRef}>
                    <div className={styles.emblaContainer}>
                        <div className={styles.chapter}>
                            <Image
                                src="/images/dewa-juice.avif"
                                className={styles.desktopOnly}
                                alt="Javanese jamu"
                                width={300}
                                height={533}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '70% 30%'
                                }}
                            />
                            <Image
                                src="/images/dewa-juice-mobile.avif"
                                className={styles.mobileOnly}
                                alt="Javanese jamu"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    // overwriting the width/height props
                                    width: '100%',
                                    height: '433px',
                                    objectFit: 'cover',
                                    objectPosition: '70% 40%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3 className={styles.chapterAboutHeader}>
                                    Your Dedicated Villa Team
                                </h3>
                                <span className={styles.chapterText}>
                                    Personalized care, whenever you need it.
                                    From the moment you wake, our team is
                                    ready to assist, whether that’s our lovely
                                    chef preparing your meals, daily 
                                    housekeeping, or arranging local
                                    excursions. We handle every detail during
                                    the day, giving you full-service support
                                    with total privacy when you need it.
                                </span>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image
                                src="/images/sushi-close.avif"
                                className={styles.desktopOnly}
                                alt="Vegan sushi"
                                width={300}
                                height={533}
                            />
                            <Image
                                src="/images/sushi-close-mobile.avif"
                                className={styles.mobileOnly}
                                alt="Vegan sushi"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    // overwriting the width/height props
                                    width: '100%',
                                    height: '433px',
                                    objectFit: 'cover',
                                    objectPosition: '70% 40%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3 className={styles.chapterAboutHeader}>
                                    Nature’s Kitchen
                                </h3>
                                <span className={styles.chapterText}>
                                    At Harmony Hill, every meal is an essential
                                    part of your sanctuary experience. We are on
                                    a constant mission to curate the finest locally
                                    grown, healthful, and delightful ingredients.
                                    Rooted in a philosophy of conscious living, our
                                    kitchen honors a full-circle connection to the
                                    earth. We minimize our ecological footprint
                                    while maximizing your well-being, proving
                                    that thoughtful hospitality and deep
                                    nourishment can go hand in hand.
                                </span>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image
                                src="/images/rice-paddy-tour.avif"
                                alt="Rice paddy tour"
                                className={styles.desktopOnly}
                                width={300}
                                height={533}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '80% 30%'
                                }}
                            />
                            <Image
                                src="/images/rice-paddy-tour-mobile.avif"
                                alt="Rice paddy tour"
                                className={styles.mobileOnly}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    // overwriting the width/height props
                                    width: '100%',
                                    height: '433px',
                                    objectFit: 'cover',
                                    objectPosition: '70% 60%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3 className={styles.chapterAboutHeader}>
                                    Experience Authentic Bali
                                </h3>
                                <span>
                                    Harmony Hill is deeply rooted in the heart of a
                                    traditional Balinese village, far removed from the
                                    crowded resort hubs. We believe the best way to 
                                    experience our island home is through the eyes 
                                    of those who live here. To welcome you into our 
                                    community, we invite all our guests to join us on a 
                                    complimentary village, rice field, and waterfall 
                                    walk. Led by our local team, it’s an intimate 
                                    invitation to learn about Balinese culture, share 
                                    stories, and experience the quiet wonder of our 
                                    island as a welcomed guest, not just a visitor.
                                </span>
                                <ul>
                                    <li>
                                        Life in the Village: Stroll through our local 
                                        pathways as we share the rhythms, traditions, 
                                        and timeless philosophy that shape Balinese 
                                        daily life and culture.
                                    </li>
                                    <li>
                                        Sacred Landscapes: Wander through lush, 
                                        hand-carved rice paddies and follow quiet 
                                        trails through the tropical valley.
                                    </li>
                                    <li>
                                        Hidden Waters: Cool down at a serene local 
                                        waterfall nestled deep in the greenery—a 
                                        peaceful spot known mostly to our community.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image
                                src="/images/breakfast-nook-cat.avif"
                                alt="Breakfast with a view and a cat"
                                className={styles.desktopOnly}
                                width={330}
                                height={533}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '50% 20%'
                                }}
                            />
                            <Image
                                src="/images/breakfast-nook-cat-mobile.avif"
                                alt="Breakfast with a view and a cat"
                                className={styles.mobileOnly}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    // overwriting the width/height props
                                    width: '100%',
                                    height: '433px',
                                    objectFit: 'cover',
                                    objectPosition: '70% 60%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3 className={styles.chapterAboutHeader}>
                                    Morning Rituals & In-Villa Refreshments
                                </h3>
                                <ul>
                                    <li>
                                        <strong>A Warm Welcome:</strong> Upon your arrival, enjoy a 
                                        fresh, vibrant basket of local seasonal tropical fruits, 
                                        thoughtfully prepared to welcome you to the valley.

                                    </li>
                                    <li>
                                        <strong>Complimentary Nourishing Breakfast:</strong> Each morning, 
                                        savor a freshly prepared 100% plant-based breakfast 
                                        crafted by our chef. Choose from signature favorites 
                                        like our creamy chia pudding, double-topped 
                                        avocado/scramble toast or scrumptious Indonesian
                                        waffles
                                    </li>
                                    <li>
                                        <strong>Artisanal Wanagiri Coffee:</strong> To keep you energized 
                                        throughout your stay, your villa is fully stocked with 
                                        unlimited 100% Arabica coffee from the high-altitude 
                                        region of Wanagiri. Grind and brew your own fresh 
                                        cup whenever you wish, enjoyed right on your private 
                                        terrace.
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.chapter}>
                            <Image
                                src="/images/rice-paddy-view-2.avif"
                                alt="Rice paddy view"
                                className={styles.desktopOnly}
                                width={300}
                                height={533}
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: '50% 20%'
                                }}
                            />
                            <Image
                                src="/images/rice-paddy-view-2-mobile.avif"
                                alt="Rice paddy view"
                                className={styles.mobileOnly}
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{
                                    // overwriting the width/height props
                                    width: '100%',
                                    height: '433px',
                                    objectFit: 'cover',
                                    objectPosition: '70% 60%'
                                }}
                            />
                            <div className={styles.chapterAbout}>
                                <h3 className={styles.chapterAboutHeader}>
                                    Cradled by the Jungle
                                </h3>
                                <span>
                                    Extending out toward the canopy, each villa’s 
                                    private wooden deck offers an open-air front 
                                    row to the lush valley below. It’s a space 
                                    designed for whatever pace you choose, 
                                    whether that’s a morning yoga practice, a few 
                                    quiet moments of meditation, or simply 
                                    sipping coffee as the jungle valley comes alive.
                                </span>
                            </div>
                        </div>
                        {/* Empty chapter to enable user to see the last chapter clearly */}
                        <div className={styles.desktopOnly}>
                            <div className={styles.chapter}>
                                <div
                                    style={{ height: '533px', width: '300px', backgroundColor: 'transparent' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.navigators}>
                    <SlideNext2
                        onClick={scrollNext}
                    />
                </div>
            </div>
        </section>
    );
}