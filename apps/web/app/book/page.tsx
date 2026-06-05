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
    { src: '/images/pool-deck-view.avif',      alt: 'Infinity Pool',             aspectRatio: "16/6" },
    { src: '/images/bdr-3-villa-1.avif',       alt: 'bed room',                  aspectRatio: "16/6" },
    { src: '/images/living-room-villa-1.avif', alt: 'spacious living room',      aspectRatio: "16/6" },
    { src: '/images/villa-1-taking-bath.avif', alt: 'luxurious copper bath tub', aspectRatio: "16/6" },
    { src: '/images/infinity-pool-view.avif',  alt: 'jungle infinity pool',      aspectRatio: "16/6" },
];

const mainContainerStyle = {
    maxWidth: "768px",
    marginLeft: "auto",
    marginRight: "auto",
}

export default function Book() {
    return (
        <main>
            <div style={mainContainerStyle}>
                <Carousel images={images} options={{rounded: false}} />
                <div style={{paddingLeft: "1.5rem", paddingRight: "1.5rem"}}>
                    <h1>
                        Book Your Stay
                    </h1>
                    <div>
                        Please enter your dates below to see availability. We cannot wait to welcome you!
                    </div>
                    <SirvoyBooking />

                    <div>
                        Any questions? Please don't hesitate to contact us
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <WhatsAppButton />
                            <EmailButton />
                        </div>
                    </div>

                    <br />

                    <BookingPolicy />
                </div>
            </div>
        </main>
    );
}