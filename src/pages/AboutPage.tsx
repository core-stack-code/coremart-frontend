import AboutBadge from "@/components/sections/about-badge"
import AboutInfo from "@/components/sections/about-info"

const About:React.FC = () => {
    return (
        <>
            <div className="grid grid-cols-2 gap-12">
                <div className="flex flex-col justify-center">
                    <AboutInfo />
                </div>

                <div className="flex justify-center items-center">
                    <div className="w-full max-w-xl aspect-square">
                        <img src="/AboutUs.svg" alt="About Us" className="w-full h-full object-contain" />
                    </div>
                </div>
            </div>

            <AboutBadge />
        </>
    )
}

export default About