'use client';

import { DayPicker } from 'react-day-picker';
import "react-day-picker/dist/style.css";

interface BookingCalendarProp {
    title : string
}

export default function BookingCalendar({title} : BookingCalendarProp) {
    return (
        <div>
            <h3>{title}</h3>
            <DayPicker
                mode='range'
                className='rdp'
                style={{
                    "--rdp-accent-color":"rgba(17, 72, 47, 0.9)",
                } as React.CSSProperties}
            />
        </div>
    );
}