import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SeeMyResult from "../Pages/Result/SeeMyResult";
import Dashboard from "../Pages/Dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/see-my-result",
        element: <SeeMyResult />,
      },
      {
        path: "/Dashboard",
        element: <Dashboard/>,
      },
    ],
  },
]);
