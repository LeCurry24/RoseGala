import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Layout from "./components/Layouts"
import Home from "./components/Home";
import GalleryPage from "./components/GalleryPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import About from "./components/AboutPage";


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
        },
        {
          path: "/profile",
          element: <Profile/>
        },
        {
          path: "/about",
          element: <About/>,
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