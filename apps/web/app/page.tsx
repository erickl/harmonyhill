import styles from "./page.module.css";
import HeroVideo from "@/components/HeroVideo";
import AboutUs from "@/components/AboutUs";
import OurVillas from "@/components/OurVillas";
import NaturesKitchen from "@/components/NaturesKitchen";
import StayIn from "@/components/StayIn";
import Explore from "@/components/Explore";
import ReadyForParadise from "@/components/ReadyForParadise";
import GoodToKnow from "@/components/GoodToKnow";
import Faq from "@/components/Faq";
import LeafDivider from "@/components/LeafDivider";
import FloatingButtons from "@/components/FloatingButtons";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <HeroVideo />
                <AboutUs />

                <OurVillas />
                <NaturesKitchen />
                <StayIn />
                <Explore />
                <ReadyForParadise />
                <LeafDivider />
                {/* <LazySection><Availability /></LazySection> */}
                {/* <LazySection><LeafDivider /></LazySection> */}
                <GoodToKnow />
                <Faq />
                <FloatingButtons />
            </main>
        </div>
    );
}
