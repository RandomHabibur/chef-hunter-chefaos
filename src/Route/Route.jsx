import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../Comonents/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
