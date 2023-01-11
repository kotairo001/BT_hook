import React from "react";

function Data({ data, handleDelete, handleFinish, handleEdit }) {
  return (
    <tbody>
      <tr>
        <td>{data.name}</td>
        <td>{data.status ? "Finish" : "On Going"}</td>
        <td>
          <button onClick={() => handleEdit(data)}>Edit</button>
          <button onClick={() => handleFinish(data.id)}>Finish</button>
          <button onClick={() => handleDelete(data.id)}>Delete</button>
        </td>
      </tr>
    </tbody>
  );
}

export default Data;
