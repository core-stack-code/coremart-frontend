import { NavLink } from "react-router-dom"


const TermsConditionFooter = () => {
  return (
    <>
      <div>
        <span className="text-muted ">All Rights Reserved | </span>
        <NavLink to={''} className="text-primary hover:underline">Terms and Conditions</NavLink>
        <span className="text-[#6F6C90] "> | </span>
        <NavLink to={''} className="text-primary hover:underline">Privacy Policy</NavLink>
      </div>
    </>
  )
}

export default TermsConditionFooter