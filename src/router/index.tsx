import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import ProductList from "@/modules/Products-1/pages/product-list";
import ProductCategory from "@/modules/Products-1/pages/product-category";
import ProductDetails from "@/modules/Products-1/pages/product-details";
import YourCart from "@/modules/me/pages/your-cart";
import Profile from "@/modules/me/pages/profile";
import Whislist from "@/modules/me/pages/whislist";
import Saved from "@/modules/me/pages/saved";
import OrderHistory from "@/modules/order/pages/order-histrory";
import CheckOut from "@/modules/order/pages/order-checkout";
import TrackingOrder from "@/modules/order/pages/tracking-order";
import About from "@/modules/about/pages/about";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/modules/auth/pages/login";
import SignUpPage from "@/modules/auth/pages/singup";
import Contact from "@/modules/contact/pages/contact";
import ForgetPassword from "@/modules/auth/pages/forgot-password";
import ResetPassword from "@/modules/auth/pages/rest-password";
import OTPVerify from "@/modules/auth/pages/otp-verify";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
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
                    { path: 'saved', element: <Saved /> },
                ]
            },
            {
                path: 'order',
                children: [
                    { index: true, element: <OrderHistory /> },
                    { path: 'checkout', element: <CheckOut /> },
                    { path: 'trackingorder', element: <TrackingOrder /> }
                ]
            },
            { path: 'about', element: <About /> },
            { path: 'contact', element: <Contact /> },
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout />,
        errorElement:<ErrorPage/>,
        children: [
            { index: true, element: <LoginPage />},
            { path: 'signup', element: <SignUpPage /> },
            { path: 'forgetpassword', element: <ForgetPassword /> },
            { path: 'resetpassword', element: <ResetPassword /> },
            { path: 'otp', element: <OTPVerify />}
        ]
    }
])

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter