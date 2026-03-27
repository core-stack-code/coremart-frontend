import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import ErrorPage from "@/pages/ErrorPage";
import About from "@/pages/AboutPage";
import Contact from "@/modules/contact/page";

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
import AuthLayout from "@/layouts/AuthLayout";
import LoginPage from "@/modules/auth/pages/LoginPage";
import SignUpPage from "@/modules/auth/pages/SingupPage";
import ForgetPassword from "@/modules/auth/pages/ForgetPasswordPage";
import ResetPassword from "@/modules/auth/pages/ResetPasswordPage";
import OTPVerify from "@/modules/auth/pages/OTPVerifyPage";
import OrderTestPage from "@/modules/order/pages/OrderTest";
import LandingPage from "@/pages/LandingPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <LandingPage /> },
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
                    { path: "test", element: <OrderTestPage /> },
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