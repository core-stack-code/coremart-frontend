import AboutusBadge from "@/components/ui/aboutus-badge"

const About = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-12">


                    <div className="flex md:flex-col lg:flex-row my-18">
                            <div className="space-y-3">
                                <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl">About Us</h1>
                                <div className="flex flex-col text-muted gap-5 text-[16px] sm:text-base">
                                    <p>
                                        At <span className="font-bold">Coremart</span>, we believe fashion should be effortless, expressive and accessible to everyone. Our mission is to bring you high quality, trendy and comfortable clothing that fits your unique style.
                                    </p>
                                    <p>
                                        We are passionate about quality, sustainability and customer satisfaction. Every piece is carefully curated to reflect the latest fashion trends without compromising on comfort and durability.
                                    </p>
                                    <p>
                                        Thank you for being a part of our journey. Let's make fashion more fun, inclusive and inspiring together.
                                    </p>
                                </div>
                            </div>


                        <div className="w-full flex justify-center">
                            <img src="/AboutUs.svg" alt="About Us" className="max-w-full h-auto" />
                        </div>
                    </div>


                <div className="flex flex-col md:flex-row justify-around items-center gap-52 flex-wrap">

                    <AboutusBadge iconName={"aboutdeliveryIcon"} service={'FREE AND FAST DELIVERY'} description={'Free delivery for all orders over ₹999'} />

                    <AboutusBadge iconName={"aboutserviceIcon"} service={'24/7 CUSTOMER SERVICE'} description={'Friendly 24/7 customer support'} />

                    <AboutusBadge iconName={"aboutguaranteeIcon"} service={'MONEY BACK GUARANTEE'} description={'We return money within 30 days'} />

                </div>
            </div>

        </>
    )
}

export default About