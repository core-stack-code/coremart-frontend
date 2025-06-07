import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DefaultPage from "../pages/DefaultPage";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../modules/auth/pages/login";
import RootLayout from "@/layouts/RootLayout";
import SignUpPage from "@/modules/auth/pages/Signup";
import ResetPassword from "@/modules/auth/pages/ResetPassword";
import ForgetPassword from "@/modules/auth/pages/ForgetPassword";

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
                        path:'signup',
                        element:<SignUpPage/>
                    },
                    {
                        path:'forgetpassword',
                        element:<ForgetPassword />
                    },
                    {
                        path:'resetpassword',
                        element:<ResetPassword/>
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