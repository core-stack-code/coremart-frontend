import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image active
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    // Sample images - replace with your actual images
    const images = [
        "https://via.placeholder.com/150/FF6B6B/FFFFFF?text=1",
        "https://via.placeholder.com/150/4ECDC4/FFFFFF?text=2",
        "https://via.placeholder.com/150/45B7D1/FFFFFF?text=3",
        "https://via.placeholder.com/150/96CEB4/FFFFFF?text=4",
        "https://via.placeholder.com/150/FFEAA7/FFFFFF?text=5"
    ];

    const testimonials = [
        { text: "Amazing quality and fast delivery!", author: "Monkey D. Luffy" },
        { text: "Incredible service and support!", author: "Roronoa Zoro" },
        { text: "Best experience ever!", author: "Nami" },
        { text: "Highly recommended!", author: "Usopp" },
        { text: "Outstanding results!", author: "Sanji" }
    ];

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

    // Touch handlers
    const handleTouchStart = (e: any) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: any) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            slideRight();
        } else if (isRightSwipe) {
            slideLeft();
        }
    };

    // Auto-slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            slideRight();
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const getImageStyle = (index: any) => {
        const position = (index - currentIndex + images.length) % images.length;

        const styles = {
            0: { // 2 positions left
                transform: 'translateX(-180px) scale(0.7)',
                filter: 'blur(8px)',
                opacity: 0.3,
                zIndex: 1
            },
            1: { // 1 position left
                transform: 'translateX(-90px) scale(0.8)',
                filter: 'blur(4px)',
                opacity: 0.6,
                zIndex: 2
            },
            2: { // center
                transform: 'translateX(0) scale(1)',
                filter: 'blur(0px)',
                opacity: 1,
                zIndex: 3
            },
            3: { // 1 position right
                transform: 'translateX(90px) scale(0.8)',
                filter: 'blur(4px)',
                opacity: 0.6,
                zIndex: 2
            },
            4: { // 2 positions right
                transform: 'translateX(180px) scale(0.7)',
                filter: 'blur(8px)',
                opacity: 0.3,
                zIndex: 1
            }
        };

        return styles[position] || { opacity: 0, transform: 'scale(0.5)' };
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-8">
            {/* Carousel Container */}
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Navigation Buttons */}
                <button
                    onClick={slideLeft}
                    disabled={isAnimating}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>

                <button
                    onClick={slideRight}
                    disabled={isAnimating}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 disabled:opacity-50"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Images Container */}
                <div
                    className="relative h-80 overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-out cursor-pointer"
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
                            <div className="relative group">
                                <img
                                    src={image}
                                    alt={`Slide ${index + 1}`}
                                    className="w-32 h-32 rounded-full object-cover shadow-2xl ring-4 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
                                />
                                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
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
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-white scale-125 shadow-lg'
                                    : 'bg-white/40 hover:bg-white/60'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Testimonial Section */}
            <div className="mt-12 text-center max-w-2xl">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <blockquote className="text-white text-xl font-medium mb-4 animate-pulse">
                        "{testimonials[currentIndex].text}"
                    </blockquote>
                    <cite className="text-blue-300 text-lg">
                        -{testimonials[currentIndex].author}
                    </cite>
                </div>
            </div>

            {/* Floating Animation Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 2}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ImageCarousel;