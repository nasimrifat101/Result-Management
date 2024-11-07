import axios from "axios";
import React, { useState } from "react";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  axios.get("/public/Dummy.json").then((res) => setStudents(res.data));

  return (
    <div className="overflow-x-auto min-w-full px-5">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
           
            <th>Name</th>
            <th>Group</th>
            <th>Batch</th>
            <th>Avrage Mark & Grade</th>
            <th>Edit Result</th>
          </tr>
        </thead>
        <tbody>
         {
          students.map((student) => (
            <tr>
           
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{student.name}</div>
                  <div className="text-sm opacity-50">{student.id}</div>
                </div>
              </div>
            </td>
            <td>
            <p>{student.group}</p>
            </td>
            <td>{student.batch}</td>
            <td className="space-x-10"><span>{student.average}</span><span>{student.grade}</span></td>
            <th>
              <button className="btn btn-outline">Edit</button>
            </th>
          </tr>
          ))
         }
        </tbody>
        {/* foot */}

      </table>
    </div>
  );
};

export default StudentList;
