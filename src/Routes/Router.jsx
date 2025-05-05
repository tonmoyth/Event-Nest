import { createBrowserRouter } from "react-router";
import Root from "../Root";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import ViewDetails from "../pages/viewDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        ErrorBoundary: Error,
        children: [
            {
                index: true,
                Component: HomeLayout,
                loader: () => fetch('/event.json')
            },
            {
                path:'viewDetails/:id',
                Component: ViewDetails,
                loader: () => fetch('/event.json')
            },
            {
                path: 'login',
                Component: Login
            },
            {
                path: 'register',
                Component:Register
            }

        ]
    }
])

export default Router;