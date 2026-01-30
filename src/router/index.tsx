import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import HomePage from "@/pages/HomePage";
import CategoryLandingPage from "@/modules/category/pages/CategoryLandingPage";
import CategoryPage from "@/modules/category/pages/CategoryPage";

import ProductList from "@/modules/product/pages/ProductList";
import ProductDetails from "@/modules/product/pages/ProductDetailPage";

import YourCart from "@/modules/me/pages/YourCartPage";
import Profile from "@/modules/me/pages/ProfilePage";
import Whislist from "@/modules/me/pages/WhisListPage";
import Saved from "@/modules/me/pages/SavedPage";
import OrderHistory from "@/modules/order/pages/order-histrory";
import CheckOut from "@/modules/order/pages/order-checkout";
import TrackingOrder from "@/modules/order/pages/tracking-order";
import About from "@/modules/about/pages/AboutPage";
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/modules/auth/pages/login";
import SignUpPage from "@/modules/auth/pages/singup";
import Contact from "@/modules/contact/pages/ContactPage";
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
                    { path: ':slug', element: <ProductDetails /> },
                ]
            },
            {
                path: 'category',
                children: [
                    { index: true, element: <CategoryLandingPage /> },
                    { path: ':category', element: <CategoryPage /> },
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
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <LoginPage /> },
            { path: 'signup', element: <SignUpPage /> },
            { path: 'forgetpassword', element: <ForgetPassword /> },
            { path: 'resetpassword', element: <ResetPassword /> },
            { path: 'otp', element: <OTPVerify /> }
        ]
    }
])

const AppRouter = () => {
    return <RouterProvider router={router} />
}

export default AppRouter