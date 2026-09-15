import { useState } from "react";



type StyleObject = {
    transform: string;
    opacity: number;
    zIndex?: number;
};



const images = [
    "/All-Category/Bottom-Wear/86.jpg",
    "/All-Category/Bottom-Wear/87.jpg",
    "/All-Category/Bottom-Wear/106.jpg",
    "/All-Category/Bottom-Wear/116.jpg",
    "/All-Category/Bottom-Wear/124.jpg",
];


const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(2);
    const [isAnimating, setIsAnimating] = useState(false);


    const slideLeft = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const slideRight = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setTimeout(() => setIsAnimating(false), 600);
    };

    const handleWheel = (e: any) => {

        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            // Vertical scroll - ignore
            return;
        }

        if (e.deltaX > 0) {
            // Scroll right
            slideRight();
        } else if (e.deltaX < 0) {
            // Scroll left
            slideLeft();
        }
    };



    const getImageStyle = (index: number) => {
        const position = (index - currentIndex + images.length) % images.length;
        const baseShift = window.innerWidth < 640 ? 80 : window.innerWidth < 1024 ? 120 : 140;

        const styles: { [key: number]: StyleObject } = {
            0: { transform: `translateX(-${baseShift * 2.5}px) scale(0.7)`, opacity: 0.5, zIndex: 1 },
            1: { transform: `translateX(-${baseShift * 1.3}px) scale(0.8)`, opacity: 0.5, zIndex: 2 },
            2: { transform: `translateX(0) scale(1)`, opacity: 1, zIndex: 3 },
            3: { transform: `translateX(${baseShift * 1.3}px) scale(0.8)`, opacity: 0.5, zIndex: 2 },
            4: { transform: `translateX(${baseShift * 2.5}px) scale(0.7)`, opacity: 0.5, zIndex: 1 },
        };


        return styles[position] || { opacity: 0, transform: 'scale(0.5)' };
    };



    return (
        <>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="relative w-full mx-auto p-10">
                    <div
                        className="h-55 overflow-hidden flex justify-center items-center cursor-grab"
                        onWheel={handleWheel}
                    >
                        {images.map((image, index) => (
                            <div
                                key={index}
                                className="absolute transition-all duration-300 ease-in cursor-pointer"
                                style={getImageStyle(index)}
                                onClick={() => {
                                    if (index !== currentIndex) {
                                        const diff = (index - currentIndex + images.length) % images.length;
                                        if (diff <= 2) {
                                            for (let i = 0; i < diff; i++) {
                                                setTimeout(() => slideRight(), i * 100);
                                            }
                                        } else {
                                            for (let i = 0; i < images.length - diff; i++) {
                                                setTimeout(() => slideLeft(), i * 100);
                                            }
                                        }
                                    }
                                }}
                            >
                                <div className="relative group flex">
                                    <img
                                        src={image}
                                        alt={`Slide ${index + 1}`}
                                        className={`
                                        w-24 h-24 
                                        sm:w-28 sm:h-28 
                                        md:w-32 md:h-32 
                                        lg:w-36 lg:h-36 
                                        xl:w-40 xl:h-40 
                                        rounded-full object-cover 
                                        shadow-2xl ring-4 ring-white/20 
                                        group-hover:ring-white/40 transition-all duration-300                       `}
                                        draggable={false}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Testimonial Text */}
                    <div className="text-center mt-8 space-y-3 px-2 sm:px-4">
                        <p className="text-muted text-sm sm:text-base italic">
                            "Amazing quality and fast delivery!"
                        </p>
                        <p className="text-secondary text-xs sm:text-sm font-semibold mt-1">
                            – Monkey D. Luffy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel