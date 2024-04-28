// Import necessary components from react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import page components
import Home from "./pages/Home";
import Restaurant from "./pages/Restaurant";
import GoogleMap from "./pages/Map";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import TermsAndConditions from "./pages/TermsAndConditions";
import Root from "./pages/Root";
import SubmitPlace from "./pages/SubmitPlace";

// Create the router configuration
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
      {
        path: "submit-attraction",
        element: <SubmitPlace />
      }
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
]);

// Export the App component
export default function App() {
  // Render the RouterProvider with the configured router
  return (
    <RouterProvider router={router} />
  );
}