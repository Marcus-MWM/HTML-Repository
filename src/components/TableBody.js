import React, { useEffect, useState } from "react";
import "./TableBody.css";

const TableBody = ({ data }) => {
  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      data.reduce((accumulator, object) => {
        return accumulator + object.credits;
      }, 0)
    );
  }, []);
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Course ID</th>
            <th>Course Title</th>
            <th>Course Credits</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data) => (
            <tr>
              <td className="td">{data.id}</td>
              <td className="td">{data.title}</td>
              <td className="td">{data.credits}</td>
              <td className="td">{data.grade}</td>
            </tr>
          ))}
          <tr>
            <td colSpan={2}></td>
            <td>
              <span>Total Credits: {total}</span>
            </td>
            <td>
              <span>
                GPA:3.52
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;