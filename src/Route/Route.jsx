import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Comonents/Home/Home";
import ChefDetails from "../Comonents/ChefDetails/ChefDetails";
import Menu from "../Comonents/Home/MenuSlider/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "chefdetails/:chefid",
        element: <ChefDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/allchef/v1/chefid/${params.chefid}`),
      },
    ],
  },
]);

export default router;
