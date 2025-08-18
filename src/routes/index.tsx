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


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <DefaultPage/>, // this should be with layout
        children: [
            {
                path: 'auth',
                element: <AuthLayout />,
                errorElement: <DefaultPage/>, // wihtout layout
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
                errorElement: <DefaultPage/>,
                children: [
                    {
                        path:'home',
                        element:<Home/>
                    },
                    {
                        path: 'category',
                        element: <ProductCategory />
                    },
                    {
                        path: 'productlist',
                        element: <ProductList />
                    },
                    {
                        path: '/product/:productid',
                        element: <ProductDetails />
                    },
                    {
                        path: 'whislist',
                        element: <Whislist/>
                    },
                    {
                        path:'about',
                        element:<About/>
                    },
                    {
                        path:'contact',
                        element:<Contact/>
                    },
                    {
                        path:'saved',
                        element:<Saved/>
                    },
                    {
                     path:'orderhistory',
                     element:<OrderHistory/>   
                    },
                    {
                        path:'checkout',
                        element: <CheckOut/>
                    },
                    {
                        path:'addtocart',
                        element:<YourCart/>
                    }
                ]
            },
            {
                path:'user',
                element: <HeaderLayout />,
                errorElement: <DefaultPage/>,
                children: [
                    {
                        path:'profile',
                        element:<Profile/>
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