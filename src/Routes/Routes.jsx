import Main from "../Layers/Main";
import Aboutus from "../Pages/Aboutus";
import Home from "../Pages/Home";
import { createBrowserRouter } from "react-router-dom";
import SERvices from "../Pages/SERvices";

export const router = createBrowserRouter([
 {
    path: "/",
    element: <Main></Main>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/aboutUs",
            element: <Aboutus></Aboutus>
        },
        {
            path: "/services",
            element:<SERvices></SERvices>
        },
    ]
 }


]);