import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Fruit from "../layout/Fruit/Fruit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Fruit />
  }
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
