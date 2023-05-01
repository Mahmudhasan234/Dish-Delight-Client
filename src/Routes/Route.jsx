import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Pages/Home/Home";
import Blogs from "../component/Pages/Blogs";
import AboutUs from "../component/Pages/AboutUs";
import Login from "../component/Pages/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/aboutus',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])
export default router