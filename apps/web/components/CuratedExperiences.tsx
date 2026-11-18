'use client';

import {useState} from "react";
import styles from "./CuratedExperiences.module.css";
import ResponsiveGallery from "./ResponsiveGallery";

const tabs = ["Wellness", "Culture"];

const options = {rounded: true }
const images = [
    { src: "/images/gunung-kawi.avif",     alt: "Gunung Kawi", aspectRatio: "10/6",  options: options, description: "Experience stillness at Gunung Kawi, or do a purification ritual at Bali's largest spring water temple" },
    { src: "/images/barong2.avif",         alt: "Barong Bali", aspectRatio: "10/6",  options: options, description: "Get lost in bustling Ubud - Bali's cultural and culinary heaven. We will share our favorite eats or organize a driver for you" },
    { src: "/images/batur-optimized.avif", alt: "Kintamani",   aspectRatio: "10/6",  options: options, description: "Hike up Mount Batur to see the sun rise over the island, or ride through the lava fields by jeep" },
];

export default function CuratedExperiences({}) {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className={styles.main}>
            <h2 className="section-title">
                Curated Experiences
            </h2>
            <div className={styles.expTabs}>
                {tabs.map((tabName) => {
                    return (
                        <span 
                            key={`tab-${tabName}`}
                            className={`${styles.expTab}${selectedTab === tabName ? ".selected" : ""}`}
                            onClick={() => setSelectedTab(tabName)}
                        >
                            {tabName}
                        </span>
                    );
                })}
            </div>
            
            <div 
                className={styles.tabContent}
            >
                <ResponsiveGallery
                    images={images}
                />
            </div>

        </div>
    )
}
