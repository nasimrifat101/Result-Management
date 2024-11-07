import { useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import StudentList from "../../Data/StudentList";

const Dashboard = () => {
  

    return (
        <div>
            <Navbar/>
            <StudentList/>
        </div>
    );
};

export default Dashboard;