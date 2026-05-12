import SirvoyBooking from "@/components/SirvoyBooking";
import BookingPolicy from "@/components/BookingPolicy";
import Carousel from "@/components/Carousel";
import WhatsAppButton from "@/components/WhatsAppButton";
import EmailButton from "@/components/EmailButton";

export const metadata = {
    title: 'Book Your Stay | Harmony Hill Bali',
    alternates: {
        canonical: '/book',
    },
}

const images = [
    { src: '/images/pool-deck-view.avif', alt: 'Infinity Pool' },
    { src: '/images/bdr-3-villa-1.avif', alt: 'bed room' },
    { src: '/images/living-room-villa-1.avif', alt: 'spacious living room' },
    { src: '/images/villa-1-taking-bath.avif', alt: 'luxurious copper bath tub' },
    { src: '/images/infinity-pool-view.avif', alt: 'jungle infinity pool' },
];

export default function Book() {
    return (
        <main>
            <Carousel images={images} />
            <h1 style={{marginLeft: "8rem"}}>
                Book Your Stay
            </h1>
            <div style={{marginLeft: "8rem"}}>
                Please enter your dates below to see availability. We cannot wait to welcome you!
            </div>
            <SirvoyBooking />

            <div style={{marginLeft: "1.5rem"}}>
                Any questions? Please don't hesitate to contact us
                <div style={{display:"flex", flexDirection:"row"}}>
                    <WhatsAppButton />
                    <EmailButton />
                </div>
            </div>

            <br />

            <BookingPolicy />
        </main>
    );
}