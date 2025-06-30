import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../modules/auth/pages/login";
import RootLayout from "@/layouts/RootLayout";
import SignUpPage from "@/modules/auth/pages/Signup";
import ResetPassword from "@/modules/auth/pages/ResetPassword";
import ForgetPassword from "@/modules/auth/pages/ForgetPassword";
import OTPVerify from "@/modules/auth/pages/OTPVerify";
import HeaderLayout from "@/layouts/HeaderLayout";
import ProductCategory from "@/modules/Product/pages/Product-Category";
import FilterPanel from "@/modules/Product/pages/Product-List";
import ProductDetails from "@/modules/Product/pages/Product-Details";
import AddToCart from "@/modules/Product/pages/Add-To-Cart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <DefaultPage pageName="Error Page" />, // this should be with layout
        children: [
            {
                path: 'auth',
                element: <AuthLayout />,
                errorElement: <DefaultPage pageName="Auth Error Page" />, // wihtout layout
                children: [
                    {
                        index: true,
                        element: <LoginPage />
                    },
                    {
                        path: 'signup',
                        element: <SignUpPage />
                    },
                    {
                        path: 'forgetpassword',
                        element: <ForgetPassword />
                    },
                    {
                        path: 'resetpassword',
                        element: <ResetPassword />
                    },
                    {
                        path: 'otp',
                        element: <OTPVerify />
                    }
                ]
            },
            {
                path: 'product',
                element: <HeaderLayout />,
                errorElement: <DefaultPage pageName="Product Error Page" />,
                children: [
                    {
                        path: 'category',
                        element: <ProductCategory />
                    },
                    {
                        path: 'productlist',
                        element: <FilterPanel />
                    },
                    {
                        path: 'productdetails',
                        element: <ProductDetails />
                    },
                    {
                        path: 'addtocart',
                        element: <AddToCart />
                    }
                ]
            }
        ]
    },
])

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter