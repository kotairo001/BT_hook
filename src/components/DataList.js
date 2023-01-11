import React from "react";
import Data from "./Data";

function DataList({ dataList ,handleDelete, handleFinish, handleEdit}) {
  return (
    <div className="data">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {dataList.map((data) => {
          return <Data key={data.id} data={data} handleDelete={handleDelete} handleFinish={handleFinish} handleEdit={handleEdit}></Data>;
        })}
      </table>
    </div>
  );
}

export default DataList;
