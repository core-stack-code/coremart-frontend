import Icon from "@/components/ui/icons"
import ContactUsFooterLinks from "@/modules/Footer/component/Contact Links"
import FooterLinks from "@/modules/Footer/component/Shop Account Customer Links"
import TermsConditionFooter from "@/modules/Footer/component/Terms Condition"


const FooterLayout = () => {
    return (
        <>
            <div className="w-[80%] mx-auto">
                <footer className="bg-white text-gray-700 px-6 md:px-16 py-10 border-t border-gray-300">
                    <div className="flex flex-col md:flex-row justify-between gap-10">
                        {/* Left Logo + Text */}
                        <div className=" space-y-4 max-w-full">
                            <img src='/New-Logo.svg' alt='Logo' className='w-20 h-auto object-contain' />
                            <div >
                                <p className="text-sm">Fashion made easy for everyone, everywhere.</p>
                                <div className="flex gap-4 text-purple-600 text-xl">
                                    <Icon name="instagramIcon" width={24} height={24} />
                                    <Icon name="facebookIcon" width={24} height={24} />
                                    <Icon name="linkdinIcon" width={24} height={24} />
                                    <Icon name="twitterIcon" width={24} height={24} />
                                </div>
                            </div>
                        </div>

                        {/* Links */}
                        <div className=" grid grid-cols-2 ms:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 text-sm">
                            <div>
                                <h4 className="font-semibold mb-2">Shop Categories</h4>
                                {/* <ul className="space-y-1 flex flex-col">
                                    <a href="#" className="hover:text-purple-600 hover:underline">Men</a>
                                    <a href="#" className="hover:text-purple-600 hover:underline">Women</a>
                                    <a href="#" className="hover:text-purple-600 hover:underline">Kids</a>
                                    <a href="#" className="hover:text-purple-600 hover:underline">New Arrivals</a>
                                    <a href="#" className="hover:text-purple-600 hover:underline">Sale</a>
                                </ul> */}
                                <FooterLinks />
                            </div>


                            <div>
                                <h4 className="font-semibold mb-2">Customer Account</h4>
                                <FooterLinks />

                            </div>


                            <div>
                                <h4 className="font-semibold mb-2">Customer Support</h4>
                                <FooterLinks />
                            </div>


                            <div>
                                <h4 className="font-semibold mb-2">Contacts us</h4>
                                <ContactUsFooterLinks />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-10 border-t border-gray-300 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                        <span>Copyright © 2025 CoreStack</span>
                       <TermsConditionFooter/>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default FooterLayout