import Icon from "@/components/ui/icons"
import { NavLink, Outlet, useLocation } from "react-router-dom"


const dashBoarddrawerNavigation = [
    {
        lable: 'Dashboard',
        path: '/dashboard',
        iconName: 'dashboardsliderdashboardIcon',
        iconWidth: 18,
        iconHeight: 17
    },
    {
        lable: 'Products',
        path: '/dashboard/products',
        iconName: 'dashboardsliderproductsIcon',
        iconWidth: 16,
        iconHeight: 16
    },
    {
        lable: 'Order Lists',
        path: '/dashboard/orderlists',
        iconName: 'dashboardsliderorderlistsIcon',
        iconWidth: 18,
        iconHeight: 17
    },
    {
        lable: 'Customers',
        path: '/dashboard/customers',
        iconName: 'dashboardslidercustomersIcon',
        iconWidth: 17,
        iconHeight: 21
    },
    {
        lable: 'Categories',
        path: '/dashboard/categories',
        iconName: 'dashboardslidercategoriesIcon',
        iconWidth: 19,
        iconHeight: 19
    },
    {
        lable: 'Inventory',
        path: '/dashboard/inventory',
        iconName: 'dashboardsliderinventoryIcon',
        iconWidth: 15,
        iconHeight: 17
    },
    {
        lable: 'Message',
        path: '/dashboard/message',
        iconName: 'dashboardslidermessagesIcon',
        iconWidth: 20,
        iconHeight: 18
    },
    {
        lable: 'Reports',
        path: '/dashboard/reports',
        iconName: 'dashboardsliderreportsIcon',
        iconWidth: 15,
        iconHeight: 18
    },
    {
        lable: 'Settings',
        path: '/dashboard/settings',
        iconName: 'dashboardslidersettingsIcon',
        iconWidth: 18,
        iconHeight: 19
    },
    {
        lable: 'Logout',
        path: '/dashboard/logout',
        iconName: 'dashboardsliderlogoutIcon',
        iconWidth: 18,
        iconHeight: 17
    }
]

const DashBoardLayout = () => {

    const location = useLocation()
    
    return (
        <div className='w-full h-screen bg-background flex flex-row overflow-hidden'>
            <div className='h-screen sticky top-0 flex-shrink-0 w-1/5 h-fit mt-3 bg-white space-y-5'>
                <img src='/New-Logo.svg' alt='Logo' className='w-20 h-auto object-fill mx-auto' />

                <div className="flex flex-col gap-3 mx-auto">
                    {
                        dashBoarddrawerNavigation.map((curEle) => {
                            return (
                                <NavLink
                                    to={curEle.path}
                                    key={curEle.path}
                                >
                                    <div className="flex flex-row gap-5 ">
                                        <div className={`w-[6px] ${location.pathname === curEle.path ? "bg-[var(--color-info)] " : "bg-white"}  rounded-[6px]`}>
                                        </div>
                                        <div className={`w-full flex justify-start items-center mr-8 p-4 gap-5 rounded-[6px] ${location.pathname === curEle.path ? "bg-[var(--color-info)] " : "bg-white"} ${location.pathname === curEle.path ? "text-white" : "text-black"}`}>
                                            <div>
                                                <Icon name={curEle.iconName as any} fill={`${location.pathname === curEle.path ? "white" : "black"}`} width={curEle.iconWidth} height={curEle.iconHeight} />
                                            </div>
                                            <div className="flex justify-center items-center">
                                                {curEle.lable}
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </div>
            <main className='overflow-y-auto scrollbar-hidden scroll-smooth w-full h-full  bg-[#F5F6FA] px-7 py-20'>
                <Outlet />
            </main>
        </div>
    )
}

export default DashBoardLayout