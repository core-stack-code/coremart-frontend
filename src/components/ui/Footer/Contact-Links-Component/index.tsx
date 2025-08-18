import Icon from '@/components/ui/icons'

const ContactUsFooterLinks = () => {
    return (
        <>
            <ul className="space-y-2 text-sm">
                <a href="#" className="hover:text-purple-600 hover:underline flex items-center gap-2"><Icon name="mailIcon" width={20} height={19} /> contact@company.com</a>
                <a href="#" className="hover:text-purple-600 hover:underline flex items-center gap-2"><Icon name="phoneIcon" width={20} height={19} /> +91 1234567890</a>
                <a href="#" className="hover:text-purple-600 hover:underline flex items-center gap-2"><Icon name="locationIcon" width={20} height={19} />  Gujarat, India</a>
            </ul>
        </>
    )
}

export default ContactUsFooterLinks