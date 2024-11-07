import React, { useState } from "react";

import Navbar from "../Components/Navbar";
import StudentList from "../../Data/StudentList";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div>
      <Navbar onSearch={(term) => setSearchTerm(term)} />
      <StudentList searchTerm={searchTerm} />
    </div>
  );
};

export default Dashboard;
