import Icon from "@/components/ui/icons"
import ContactUsFooterLinks from "@/components/ui/Footer/Contact-Links-Component"
import FooterLinks from "@/components/ui/Footer/Shop-Account-Customer-Links-Component"
import TermsConditionFooter from "@/components/ui/Footer/Terms-Condition-Component"


const FooterLayout = () => {
    return (
        <>
            <div className="w-[80%] mx-auto">
                <footer className="bg-white text-gray-700 px-6 md:px-16 py-10 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-start gap-10 px-4 sm:px-6 lg:px-12">
                        {/* Left Logo + Text */}
                        <div className="space-y-4 w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left">
                            <img src='/New-Logo.svg' alt='Logo' className='w-20 h-auto object-contain' />
                            <p className="text-sm max-w-xs">Fashion made easy for everyone, everywhere.</p>
                            <div className="flex gap-4 text-purple-600 text-xl justify-center md:justify-start">
                                <Icon name="instagramIcon" width={24} height={24} />
                                <Icon name="facebookIcon" width={24} height={24} />
                                <Icon name="linkdinIcon" width={24} height={24} />
                                <Icon name="twitterIcon" width={24} height={24} />
                            </div>
                        </div>

                        {/* Right Section - Links */}
                        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-sm mt-10 md:mt-0">
                            <div className="flex flex-col gap-10 items-center md:items-start">
                                <h4 className="font-semibold">Shop Categories</h4>
                                <FooterLinks />
                            </div>

                            <div className="flex flex-col gap-10 items-center md:items-start">
                                <h4 className="font-semibold">Customer Account</h4>
                                <FooterLinks />
                            </div>

                            <div className="flex flex-col gap-10 items-center md:items-start">
                                <h4 className="font-semibold">Customer Support</h4>
                                <FooterLinks />
                            </div>

                            <div className="flex flex-col gap-10 items-center md:items-start">
                                <h4 className="font-semibold">Contact Us</h4>
                                <ContactUsFooterLinks />
                            </div>
                        </div>
                    </div>


                    {/* Bottom Bar */}
                    <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <span>Copyright © 2025 CoreStack</span>
                        <TermsConditionFooter />
                    </div>
                </footer>
            </div>
        </>
    )
}

export default FooterLayout