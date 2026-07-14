'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const SubtleWhatsAppButton = dynamic(() => import("@/components/WhatsAppButtonSubtle"), { ssr: false });

export default function FloatingButtons() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    const buttonZIndex = 1000;

    return (
        <div>
            <div style={{ zIndex: buttonZIndex, position: "fixed", left: "1rem", bottom: "1rem" }}>
                <SubtleWhatsAppButton />
            </div>
        </div>
    );
}