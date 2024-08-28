import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layouts"
import Home from "./components/Home";
import GalleryPage from "./components/GalleryPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";


const router = createBrowserRouter([
    {
      element: <Layout />,
      errorElement: <ErrorPage />,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/gallery",
          element: <GalleryPage/>,
        },
        {
          path: "/sign-in",
          element: <SignIn/>
        },
        {
          path: "/sign-up",
          element: <SignUp/>
        }
        
      ]
    }
  ]);


function RoutesPage() {
    return (

        <RouterProvider router={router} />
    )
    
  }

  export default RoutesPage