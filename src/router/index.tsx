import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import About from "@/modules/about/pages/about";
import Contact from "@/modules/contact/pages/contact/index";
import AuthLayout from "@/layouts/AuthLayout";
import SignUpPage from "@/modules/auth/pages/singup";
import LoginPage from "@/modules/auth/pages/login";
import Profile from "@/modules/me/pages/profile";
import Whislist from "@/modules/me/pages/whislist";
import Saved from "@/modules/me/pages/saved";
import ForgetPassword from "@/modules/auth/pages/forgetpassword";
import ResetPassword from "@/modules/auth/pages/resetpassword";
import OTPVerify from "@/modules/auth/pages/otpverify";
import ProductList from "@/modules/products/pages/product-list";
import ProductCategory from "@/modules/products/pages/product-category";
import ProductDetails from "@/modules/products/pages/product-details";
import YourCart from "@/modules/me/pages/your-cart";
import OrderHistory from "@/modules/order/pages/order-histrory";
import CheckOut from "@/modules/order/pages/order-checkout";
import TrackingOrder from "@/modules/order/pages/tracking-order";


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