import React, { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the data from the API.
    fetch("https://backendapi-5fzj.onrender.com/api/getalluser")
      .then((response) => response.json())
      .then((json) => setData(json.getalluser));
    }, []);

  // Iterate over the data and render the results.
  return (
    <>
     <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>Email</th>
            
          </tr>
        </thead>
        <tbody>
           {data.map((item, id)=>
           <tr key = {id}>
           <td>{id + 1}</td>
           <td>{item.Name}</td>
           <td>{item.email}</td>
           
           
       </tr>
           )
          }
        </tbody>
      </table>
    </>
  );
};

export default App;