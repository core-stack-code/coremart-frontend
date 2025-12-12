import React from 'react'
import CardWrapper from '../ui/card-wrapper'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { cn } from '@/lib/utils';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
    { id: 1, name: "Alice", text: "Amazing product!" },
    { id: 2, name: "Bob", text: "Great support and easy to use." },
    { id: 3, name: "Charlie", text: "The best experience I've had." },
    { id: 4, name: "Diana", text: "Super intuitive and fast." },
    { id: 5, name: "Ethan", text: "Really helpful and reliable." },
    { id: 6, name: "Frank", text: "Would recommend to everyone!" },
];


const TestimonialSlider: React.FC = () => {
    const visible = 5;
    const minNeeded = visible * 2; // safe number for loop
    const originalCount = testimonials.length;

    // Duplicate the array until we have enough slides for a smooth loop
    const slides = React.useMemo(() => {
        const base = testimonials.map((t, i) => ({ ...t, originalIndex: i }));
        let s = [...base];
        while (s.length < minNeeded) s = s.concat(base);
        return s;
    }, [minNeeded]);

    const [active, setActive] = React.useState<number>(0);

    // compute minimal circular distance between two indices
    const circularDistance = (a: number, b: number, n: number) => {
        const diff = Math.abs(a - b);
        return Math.min(diff, n - diff);
    };

    return (
        <CardWrapper title="Testimonials" >
            <div className="w-full py-12 flex items-center justify-center border border-border rounded-3xl">
                <div className="w-full max-w-5xl">
                <Swiper
                    centeredSlides
                    slidesPerView={visible}
                    spaceBetween={60}
                    loop={true}
                    speed={700}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    onSwiper={(s) => setActive(s.realIndex % originalCount)}
                    onSlideChange={(s) => setActive(s.realIndex % originalCount)}
                    modules={[Autoplay]}
                    className="w-full"
                >
                    {slides.map((sld, idx) => {
                        // `sld.originalIndex` is 0..originalCount-1
                        const dist = circularDistance(sld.originalIndex, active, originalCount);

                        // Opacity mapping (kept as-is)
                        const opacity = dist === 0 ? 1 : dist === 1 ? 0.75 : dist === 2 ? 0.45 : 0.2;

                        // NEW: Scale mapping per your request:
                        // dist 0 -> 100% (1.0)
                        // dist 1 ->  90% (0.9)
                        // dist 2 ->  80% (0.8)
                        const scale = dist === 0 ? 1 : dist === 1 ? 0.9 : dist === 2 ? 0.8 : 0.75;

                        const style: React.CSSProperties = {
                            opacity,
                            transform: `scale(${scale})`,
                            transition: "opacity 300ms ease, transform 300ms ease",
                        };

                         const textSize =
                            dist === 0 ? "text-base" : dist === 1 ? "text-sm" : "text-xs";
                        const nameSize =
                            dist === 0 ? "text-sm" : dist === 1 ? "text-xs" : "text-[0.625rem]";

                        return (
                            <SwiperSlide key={`${sld.id}-${idx}`}>
                                <div style={style} className="flex flex-col items-center justify-center gap-6">
                                    <div className="w-40 h-40 flex items-center rounded-full justify-center overflow-hidden">
                                        <img src="/hero1.png" alt={sld.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex flex-col gap-1 items-center">
                                        <span className={cn(
                                            "text-foreground text-base font-normal whitespace-nowrap min-w-60 text-center",
                                            textSize
                                        )}>
                                            "{sld.text}"
                                        </span>
                                        <span className={cn("text-sm font-normal text-secondary", nameSize)}>— {sld.name}</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
                </div>
            </div>
        </CardWrapper>
    )
}

export default TestimonialSlider
