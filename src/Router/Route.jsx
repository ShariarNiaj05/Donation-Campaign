import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import DonationDetails from "../Pages/Donation/DonationDetails";

const MyCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children: [
            {
                path : "/",
                element: <Home></Home>,
                loader: ()=>fetch('/info.json')
            },
            {
                path : "/donation",
                element: <Donation></Donation>,
            },
            {
                path : "/statistics",
                element: <Statistics></Statistics>,
                loader: ()=>fetch('/info.json')
            },
            {
                path: "/donationdetails/:id",
                element: <DonationDetails></DonationDetails>,
                loader: ()=>fetch('/info.json')
            }

        ]
    }
])

export default MyCreatedRoute;  