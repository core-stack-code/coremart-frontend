import React from 'react'

const AboutInfo: React.FC = () => {
    return (
        <div className='flex flex-col gap-8 p-6 border border-border border-l-primary/60 border-l-4 shadow-xl rounded-rad'>
            <h1 className="font-semibold text-5xl">About <span className="font-semibold text-primary">Coremart</span></h1>
            <div className="flex flex-col text-muted text-justify gap-7 text-base">
                <p>
                    At Coremart, we believe fashion should be effortless, expressive and accessible to everyone. Our mission is to bring you high quality, trendy and comfortable clothing that fits your unique style.
                </p>
                <p>
                    We are passionate about quality, sustainability and customer satisfaction. Every piece is carefully curated to reflect the latest fashion trends without compromising on comfort and durability.
                </p>
                <p>
                    Thank you for being a part of our journey. Let's make fashion more fun, inclusive and inspiring together.
                </p>
            </div>
        </div>
    )
}

export default AboutInfo