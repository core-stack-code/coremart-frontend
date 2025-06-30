import Icon from "@/components/ui/icons"
import { NavLink } from "react-router-dom"


const Whislist = () => {


  return (
    <>
      <NavLink to={'/product/addtocart'}>
        {({ isActive }) =>
          isActive ?
        <Icon name="headerwhislistwithopenIcon" width={33} height={32} /> : 
            <Icon name="headerwhislistwithoutopenIcon" width={33} height={20} /> 
        }
      </NavLink>

    </>
  )
}

export default Whislist