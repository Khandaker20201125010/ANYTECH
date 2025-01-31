import Main from "../Layers/Main";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
export const router = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
    ]
 }


]);