import React, { useEffect, useRef, useState } from 'react'

interface timerCountDownProps {
    days?: number;
}

const pad = (n: any) => String(n).padStart(2, "0");

const TimerCountDown: React.FC<timerCountDownProps> = ({ days = 0 }) => {
    const [timeLeft, setTimeLeft] = useState<any>({ d: 0, h: 0, m: 0, s: 0 });
    const endRef = useRef(Date.now() + days * 86400000);

    useEffect(() => {
        const tick = () => {
            const diff = endRef.current - Date.now();
            if (diff <= 0) {
                clearInterval(iv);
                setTimeLeft({ d: 0, h: 0, m: 0, s: 0 });
                return;
            }
            const t = Math.floor(diff / 1000);
            setTimeLeft({
                d: Math.floor(t / 86400),
                h: Math.floor((t % 86400) / 3600),
                m: Math.floor((t % 3600) / 60),
                s: t % 60,
            });
        };

        tick();
        const iv = setInterval(tick, 1000);
        return () => clearInterval(iv);
    }, []);

    const units = [
        { label: "Days", val: timeLeft?.d },
        { label: "Hours", val: timeLeft?.h },
        { label: "Mins", val: timeLeft?.m },
        { label: "Secs", val: timeLeft?.s },
    ];

    return (
        <div className='flex gap-3'>
            {units.map(({ label, val }) => (
                <div key={label} className='min-w-20 flex flex-col gap-2 justify-between items-center bg-white p-3 rounded-rad'>
                    <div className='text-2xl font-bold'>
                        {val !== undefined ? pad(val) : "--"}
                    </div>
                    <div className='uppercase'>
                        {label}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TimerCountDown