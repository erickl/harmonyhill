'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const pathname = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (pathname !== '/') return;

        const handleScroll = () => {
            setScrolled(window.scrollY > 700);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.stickyBanner} ${scrolled ? styles.scrolled : ''}`}>
            <nav className={styles.mainNav}>
                {/* <div className={styles.bookNowHeader}><Link href="/book" target="_blank" rel="noopener">Book Now</Link></div> */}
                
                <div className={styles.navLinksContainer}>
                    <ul className={`${styles.mainNavLinks} ${isOpen ? styles.active : ""}`} id="main-nav-links">
                        <li onClick={() => setIsOpen(false)}><Link href="/#about-us">About Us</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#our-villas">Our Villas</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#natures-kitchen">Nature's Kitchen</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#stay-in">Stay In</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#explore">Explore</Link></li>
                        <li onClick={() => setIsOpen(false)}><Link href="/#goodtoknow">Good To Know</Link></li>
                        <li className={styles.bookNowHeader} onClick={() => setIsOpen(false)}><Link href="/book">Reserve</Link></li>
                        {/* <li onClick={() => setIsOpen(false)}><Link href="/#availability">Availability</Link></li> */}
                    </ul>
                </div>

                <button 
                    className={styles.hamburger} 
                    id="hamburger" aria-label="Menu"
                    onClick={toggleMenu}
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </nav>
        </header>
    );
}
