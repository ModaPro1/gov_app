import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Goals from "./pages/Goals";
import Gallary from "./pages/Gallary";
import NotFound from "./pages/NotFoud";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <NotFound />,
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: '/goals', element: <Goals /> },
        { path: '/gallary', element: <Gallary /> },
      ]
    },
  ]);

  return <RouterProvider router={router} />
}