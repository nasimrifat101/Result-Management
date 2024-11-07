import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SeeMyResult from "../Pages/Result/SeeMyResult";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Error from "../Pages/Components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error/>,
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
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
          {
            path: "/dashboard/all-students",
            element: <div>All Students</div>,
          },
          {
            path: "/dashboard/attendance",
            element: <div>Attendance</div>,
          },
          {
            path: "/dashboard/leave-request",
            element: <div>Leave Requests</div>,
          },
        ],
      },
    ],
  },
]);
