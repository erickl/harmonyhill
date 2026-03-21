'use client';

import { useState, useEffect } from "react";
import { DateRange, DayPicker } from 'react-day-picker';
import { isWithinInterval, eachDayOfInterval } from 'date-fns';
import "react-day-picker/dist/style.css";
import styles from "./BookingCalendar.module.css";

interface BookingCalendarProp {
    title: string
}

export default function BookingCalendar({ title }: BookingCalendarProp) {
    const bookedDatesTest = [
        new Date(2026, 2, 25),
        new Date(2026, 2, 26),
        // { from: new Date(2026, 2, 29), to: new Date(2026, 2, 30) }
    ]

    const [selected, setSelected] = useState<DateRange>();
    const [bookedDates, setBookedDates] = useState<Date[]>(bookedDatesTest);

    const disabledDays = [
        ...bookedDates,
        { before: new Date() }
    ];

    /**
     * Check if any dates in selected range are already taken
     */
    const handleSelect = (range: DateRange | undefined) => {
        if (!range?.from || !range?.to) {
            setSelected(range);
            return;
        }

        const allDaysInRange = eachDayOfInterval({ start: range.from, end: range.to });

        const hasOverlap = allDaysInRange.some(day =>
            bookedDates.some(bookedDate => day.getTime() === bookedDate.getTime())
        )

        if (hasOverlap) {
            setSelected(undefined);
        } else {
            setSelected(range);
        }
    }

    // useEffect(() => {
    //     // fetch booked dates
    // }, []);

    const calendarStyle = {
        "--rdp-accent-color": "rgba(17, 72, 47, 0.9)",
    } as React.CSSProperties;

    return (
        <div>
            <h3>{title}</h3>
            <DayPicker
                mode='range'
                className='rdp'
                disabled={disabledDays}
                onSelect={handleSelect}
                selected={selected}
                style={calendarStyle}
                modifiers={{ booked: bookedDates }}
                modifiersClassNames={{
                    booked: styles.bookedDayStyle || ""
                }}
            />
        </div>
    );
}
