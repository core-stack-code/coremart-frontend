import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../modules/auth/pages/login";
import RootLayout from "@/layouts/RootLayout";
import SignUpPage from "@/modules/auth/pages/singup";
import ResetPassword from "@/modules/auth/pages/ResetPassword";
import ForgetPassword from "@/modules/auth/pages/ForgetPassword";
import OTPVerify from "@/modules/auth/pages/OTPVerify";
import HeaderLayout from "@/layouts/HeaderLayout";
import ProductCategory from "@/modules/Products/pages/Product-Category";
import ProductDetails from "@/modules/Products/pages/Product-Details";
import ProductList from "@/modules/Products/pages/Product-List";
import About from "@/modules/Products/pages/About";
import Contact from "@/modules/Products/pages/Contact";
import Home from "@/modules/Products/pages/Home";
import Whislist from "@/modules/Products/pages/Whislist";
import Saved from "@/modules/Products/pages/Saved";
import OrderHistory from "@/modules/Products/pages/Order-Histrory";
import CheckOut from "@/modules/Products/pages/Order-Checkout";
import YourCart from "@/modules/Products/pages/Your-Cart";
import Profile from "@/modules/Users/pages/Profile";
import DashBoardLayout from "@/layouts/DashBoardLayout";
import Dashboard from "@/modules/DashBoard/pages";
import TrackingOrder from "@/modules/Products/pages/Tracking-Order";
import ErrorPage from "@/pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Home /> },
            {
                path: 'product',
                children: [
                    { index: true, element: <ProductList /> },
                    { path: 'category', element: <ProductCategory /> },
                    { path: ':slug', element: <ProductDetails /> },
                ]
            },
            {
                path: 'me',
                children: [
                    { index: true, element: <Profile /> },
                    { path: 'cart', element: <YourCart /> },
                    { path: 'whislist', element: <Whislist /> },
                    
                    { path: 'saved', element: <Saved />},
                ]
            },
            {
                path: 'order',
                children: [
                    { path: 'orderhistory', element: <OrderHistory /> },
                    { path: 'checkout', element: <CheckOut /> },
                    { path:'trackingorder', element:<TrackingOrder/> }
                ]
            },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
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
    }
])

const AppRouter = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRouter