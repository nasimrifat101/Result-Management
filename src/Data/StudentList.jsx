import axios from "axios";
import React, { useState, useEffect } from "react";

const StudentList = ({ searchTerm }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("/public/Dummy.json").then((res) => setStudents(res.data));
  }, []);

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="overflow-x-auto min-w-full px-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Group</th>
            <th>Batch</th>
            <th>Average Mark & Grade</th>
            <th>Edit Result</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student) => (
            <tr key={student.id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{student.name}</div>
                    <div className="text-sm opacity-50">{student.id}</div>
                  </div>
                </div>
              </td>
              <td>{student.group}</td>
              <td>{student.batch}</td>
              <td className="space-x-10">
                <span>{student.average}</span>
                <span>{student.grade}</span>
              </td>
              <td>
                <button className="btn btn-outline">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
