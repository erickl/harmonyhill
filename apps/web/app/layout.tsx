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
    title: "Harmony Hill - 100% vegan luxury villas in Bali",
    description: "Escape to a private 100% vegan villa north of Ubud. Enjoy jungle views, a private infinity pool, and a private chef. Waterfall nearby—book your luxury Bali retreat.",
    
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
