import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API.
    fetch("https://pnintership.onrender.com/api/getAllCertificate")
      .then((response) => response.json())
      .then((data) => {
        // Set the state variable to the data.
        // console.log(data.data)
        setData(data.data);
      });
  }, []);

  // Iterate over the data and render the results.
  return (
    <>
     <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>StudentName</th>
            <th>CourseName</th>
            <th>CourseDuration</th>
          </tr>
        </thead>
        <tbody>
           {data.map((item, id)=>
           <tr key = {item.id}>
           <td>{id + 1}</td>
           <td>{item.studentName}</td>
           <td>{item.courseName}</td>
           <td>{item.courseDuration}</td>
           
       </tr>
           )
          }
        </tbody>
      </table>
    </>
  );
};

export default App;