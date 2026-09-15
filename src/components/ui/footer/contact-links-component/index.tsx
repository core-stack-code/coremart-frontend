import Icon from '@/components/ui/icons'
import { NavLink } from 'react-router-dom'

const ContactUsFooterNavLinks = () => {
    return (
        <>
            <ul className="space-y-2 text-sm">
                <NavLink to={''} className="hover:text-primary hover:underline flex items-center gap-2"><Icon name="mailIcon" width={20} height={19} /> contact@company.com</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline flex items-center gap-2"><Icon name="phoneIcon" width={20} height={19} /> +91 1234567890</NavLink>
                <NavLink to={''} className="hover:text-primary hover:underline flex items-center gap-2"><Icon name="locationIcon" width={20} height={19} />  Gujarat, India</NavLink>
            </ul>
        </>
    )
}

export default ContactUsFooterNavLinks