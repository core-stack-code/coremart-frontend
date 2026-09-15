import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { NavLink } from 'react-router-dom';




const breadcrumbName = [
    {
        path: '/home',
        lable: "Home",
    }, {
        path: '/',
        lable: "Category",
    }, {
        path: '/',
        lable: "Men",
    }, {
        path: '/',
        lable: "Top Wear",
    }, {
        path: '/',
        lable: "T-Shirt",
    }
]



const BreadCrumbs = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbList>
                    {breadcrumbName.map((Breadcrumb, index) => {
                        const { path, lable } = Breadcrumb
                        return (

                            <React.Fragment key={index}>
                                <BreadcrumbItem>
                                    <BreadcrumbLink asChild >
                                        <NavLink to={path}>{lable}</NavLink>
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbSeparator />
                            </React.Fragment>

                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}

export default BreadCrumbs