import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";
import Home from "../component/Pages/Home/Home";
import Blogs from "../component/Pages/Blogs";
import AboutUs from "../component/Pages/AboutUs";
import Login from "../component/Pages/Login";
import Register from "../component/Pages/Home/Register";
import ChefsProfile from "../component/Pages/Home/Recipe/ChefsProfile";
import ChefRecipe from "../component/Pages/Home/Recipe/ChefRecipe";

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
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
              path: '/profile',
              element:<ChefsProfile></ChefsProfile>,
              
            
            },{
                path: '/recipe/:id',
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`https://dishdelight-server-mahmudhasan234.vercel.app/recipes/${params.id}`)
            }
        ]
    }
])
export default router