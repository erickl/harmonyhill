'use client';

import { useEffect, useState } from 'react';
import { GoogleTagManager } from '@next/third-parties/google';

export default function DelayedGTM({ gtmId }: { gtmId: string }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const load = () => setLoaded(true);
        window.addEventListener('scroll', load, { once: true });
        window.addEventListener('click', load, { once: true });
        window.addEventListener('touchstart', load, { once: true });
        return () => {
            window.removeEventListener('scroll', load);
            window.removeEventListener('click', load);
            window.removeEventListener('touchstart', load);
        };
    }, []);

    return loaded ? <GoogleTagManager gtmId={gtmId} /> : null;
}