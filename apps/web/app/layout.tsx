import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import DelayedGTM from "@/components/DelayedGTM";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
});

const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
});

const cormorantGaramond = Cormorant_Garamond({
    weight: ['400', '700'], 
    subsets: ['latin'],
    display: 'swap',
});

const dmSans = DM_Sans({
    weight: ['200'], 
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Harmony Hill - Plant-Based Boutique Hotel & Villas in Bali",
    description: "Vegan boutique hotel & villas north of Ubud: jungle views, infinity pool, private chef & nearby waterfall. Book now!",
    
    metadataBase: new URL('https://harmonyhillbali.com'),
    alternates: {
        canonical: '/',
    },
    
    // Beautiful lookiong link when sharing it on social media
    openGraph: {
        title: 'Harmony Hill | Vegan Luxury Villa',
        description: 'Private infinity pool, jungle views, and vegan private chef.',
        images: [{
            url: `${baseUrl}/images/nook-bed-view.avif`,
            width: 1000,
            height: 750,
        }],
    },
};

const bodyClass = `${geistSans.variable} ${geistMono.variable} ${cormorantGaramond.className}`;

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
    return (
        <html lang="en">
            <body className={bodyClass}>
                <DelayedGTM gtmId="GTM-N5VDX2B4" />
                <Header />

                {children}

                <Footer />
            </body>
        </html>
    );
}
