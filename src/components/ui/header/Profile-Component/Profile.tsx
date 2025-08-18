import { NavLink } from "react-router-dom"


const Profile = () => {
  return (
    <>
      <div className="border border-gray-400 rounded-full p-[6px] cursor-pointer">
        <NavLink to={'/user/profile'}>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M5.121 17.804A7.5 7.5 0 0112 15.5a7.5 7.5 0 016.879 2.304M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </NavLink>
      </div>
    </>
  )
}

export default Profile