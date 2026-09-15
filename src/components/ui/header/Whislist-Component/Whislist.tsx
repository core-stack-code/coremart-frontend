import Icon from "@/components/ui/icons"
import { NavLink, useLocation } from "react-router-dom"


const Whislist = () => {

  const location = useLocation();
  const isActive = location.pathname === '/me/cart' || location.pathname === '/me/saved'

  return (
    <>
      <NavLink to={'/me/cart'}>
        {isActive ?
          <Icon name="headerwhislistwithopenIcon" width={33} height={32} /> :
          <Icon name="headerwhislistwithoutopenIcon" width={33} height={20} />
        }
      </NavLink>

    </>
  )
}

export default Whislist