import PersonalInfo from "../components/personal-info"
import MyAddress from "../components/address-component"
import PasswordChange from "../components/password-change"

const Profile = () => {
    return (
        <div className="w-full flex flex-col gap-6">
            <h1 className="font-bold text-xl ">My profile</h1>

            <PersonalInfo />

            <PasswordChange />

            <MyAddress />

        </div>
    )
}

export default Profile