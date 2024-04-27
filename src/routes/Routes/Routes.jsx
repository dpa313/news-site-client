import Main from "@/layout/Main";
import Category from "@/pages/Category/Category/Category";
import Home from "@/pages/Home/Home/Home";
import News from "@/pages/News/News/News";
import { createBrowserRouter } from "react-router-dom";


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
                element: <News/>,
                loader: ({params}) => fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
])