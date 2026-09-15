import React from 'react'

const ProfileInfo: React.FC = () => {
    return (
        <div className="flex justify-start ">
            <div className="w-1/4 flex flex-col justify-center items-center gap-3">
                <img
                    src="/All-Category/Top-Wear/2NA22S0CA-K11@10.jpg"
                    alt="Profile not found"
                    className="w-32 h-32 object-cover rounded-full"
                />
                <p className="font-bold text-2xl">Sachit Dabhi</p>
            </div>


            <div className="w-full flex flex-col gap-6 justify-start">

                <div className="flex gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-muted">Full Name</p>
                        <p>Sachit Dabhi</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p className="text-muted">Phone Number</p>
                        <p>+91 1234567890</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-muted">Email Address</p>
                    <p>corestack@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo