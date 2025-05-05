import { createBrowserRouter } from "react-router";
import Root from "../Root";
import HomeLayout from "../Layout/HomeLayout/HomeLayout";
import ViewDetails from "../pages/viewDetails";


const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
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
            }
        ]
    }
])

export default Router;