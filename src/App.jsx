import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Wishlist from "./pages/Wishlist";
import TourGroups from "./pages/TourGroup";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/wish-list",
    element: <Wishlist />,
  },
  {
    path: "/tourgroups",
    element: <TourGroups />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
])

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}
