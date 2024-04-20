import React from 'react'
import { MdRemoveCircle } from "react-icons/md";

function MyplayLists() {

  return (
    <div style={{ marginTop: "90px" }}>
  
      <h1>MyPlay Lists </h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Track</th>
            <th scope="col">Title </th>
            <th scope="col">Release Date </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <MdRemoveCircle />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyplayLists
