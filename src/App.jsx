import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import GoogleMap from "./pages/Map";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Root from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
      },
      {
        path: "/restaurant",
        element: <Restaurant />,
      },
      {
        path: "/map",
        element: <GoogleMap />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/t&c",
        element: <TermsAndConditions />,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
