import Main from "@/layout/Main";
import Category from "@/pages/Category/Category/Category";
import Home from "@/pages/Home/Home/Home";
import Login from "@/pages/Login/Login/Login";
import Register from "@/pages/Login/Register/Register";
import News from "@/pages/News/News/News";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "@/pages/Others/TermsAndCondition/TermsAndConditions";
import Profile from "@/pages/Profile/Profile/Profile";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('http://localhost:3000/news')
            },
            {
                path: '/category/:id',
                element: <Category/>,
                loader: ({params}) => fetch(`http://localhost:3000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News/></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/terms',
                element: <TermsAndConditions/>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile/></PrivateRoute>
            }
        ]
    }
])