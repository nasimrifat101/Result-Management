import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import StudentList from "../../Data/StudentList";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-[275px] min-h-screen fixed top-0 left-0 bg-white shadow-lg">
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="pt-3 pl-6">
            <h1 className="text-3xl font-bold">CFM</h1>
          </div>

          {/* Sidebar Navigation Links */}
          <ul className="menu space-y-4 pt-10 pl-6">
            <li>
              <NavLink className="text-lg" to="/dashboard/all-students">
                ALL Students
              </NavLink>
            </li>
            <li>
              <NavLink className="text-lg" to="/dashboard/input-marks">
                Input Marks
              </NavLink>
            </li>
            {/* <li>
              <NavLink className="text-lg" to="/dashboard/leave-request">
                Leave Requests
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="text-lg" to="/dashboard/performance">
                Performance
              </NavLink>
            </li> */}
            {/* <li>
              <NavLink className="text-lg" to="/dashboard/training">
                Troublesome
              </NavLink>
            </li> */}
          </ul>

          <div className="flex-grow"></div> {/* Spacer to push buttons to the bottom */}

          {/* Sidebar Footer */}
          <div className="p-6">
            <button onClick={() => navigate('/')} className="btn w-full mb-4">
              Home
            </button>
            <button className="btn w-full bg-red-300">Logout</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full ml-[275px] bg-gray-50 min-h-screen">
        <Navbar onSearch={(term) => setSearchTerm(term)} />
        <StudentList searchTerm={searchTerm} />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
