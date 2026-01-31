import { NavLink } from "react-router-dom"
import { Typography } from "../../typography"


const TermsConditionFooter = () => {
  return (
    <>
      <div>
        <Typography className="text-muted ">All Rights Reserved | </Typography>
        <NavLink to={''} className="text-primary hover:underline">Terms and Conditions</NavLink>
        <Typography className="text-muted "> | </Typography>
        <NavLink to={''} className="text-primary hover:underline">Privacy Policy</NavLink>
      </div>
    </>
  )
}

export default TermsConditionFooter