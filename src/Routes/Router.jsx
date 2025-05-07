import { createBrowserRouter } from "react-router";
import Root from "../Root";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import ViewDetails from "../pages/viewDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import Loading from "../components/Header/Loading/Loading";
import Events from "../pages/Events";
import MyProfile from "../pages/MyProfile";
import ForgetPassword from "../pages/ForgetPassword";
import UpdateProfile from "../pages/UpdateProfile";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        ErrorBoundary: Error,
        children: [
            {
                index: true,
                Component: HomeLayout,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('/event.json')
            },
            {
                path:'viewDetails/:id',
                element:<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
                hydrateFallbackElement: <Loading></Loading>,
                loader: () => fetch('/event.json')
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component:Register
            },
            {
                path:'events',
                loader: () => fetch('/events.json'),
                element:<PrivateRoute><Events></Events></PrivateRoute>,
            },
            {
                path: 'myprofile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,

            },
            {
                path:'forgetPassword',
                Component: ForgetPassword
            },
            {
                path:'updateProfile',
                Component:UpdateProfile
            }

        ]
    }
])

export default Router;